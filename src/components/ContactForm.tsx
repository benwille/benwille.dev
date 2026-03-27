import React, { useRef, useState } from 'react';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, setState] = useState<FormState>('idle');
	const [error, setError] = useState<string | null>(null);
	const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>(
		{}
	);

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setState('sending');
		setError(null);
		setFieldErrors({});

		const formEl = formRef.current; // capture once
		if (!formEl) return; // safety

		const fd = new FormData(formEl);
		const data = {
			name: String(fd.get('name') ?? ''),
			email: String(fd.get('email') ?? ''),
			message: String(fd.get('message') ?? ''),
			website: String(fd.get('website') ?? ''), // honeypot
		};

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				// expect { ok:false, errors?: { field: [msg] } }
				let json: any = null;
				try {
					json = await res.json();
				} catch {}
				if (json?.errors) {
					setFieldErrors(json.errors);
					throw new Error('Please fix the highlighted fields.');
				}
				throw new Error(`Request failed (${res.status}).`);
			}

			setState('success');
			formRef.current?.reset(); // ← safe reset
		} catch (err: any) {
			setState('error');
			setError(err?.message ?? 'Something went wrong. Please try again.');
		}
	}

	return (
		<form ref={formRef} className='space-y-3' onSubmit={onSubmit}>
			<div>
				<label htmlFor='name' className='text-xs text-zinc-600'>
					Name
				</label>
				<input
					id='name'
					name='name'
					required
					className='mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100'
					placeholder='Your name'
				/>
				{fieldErrors.name && (
					<p className='mt-1 text-xs text-red-600'>
						{fieldErrors.name[0]}
					</p>
				)}
			</div>

			<div>
				<label htmlFor='email' className='text-xs text-zinc-600'>
					Email
				</label>
				<input
					id='email'
					name='email'
					type='email'
					required
					className='mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100'
					placeholder='you@company.com'
				/>
				{fieldErrors.email && (
					<p className='mt-1 text-xs text-red-600'>
						{fieldErrors.email[0]}
					</p>
				)}
			</div>

			<div>
				<label htmlFor='message' className='text-xs text-zinc-600'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					rows={3}
					required
					minLength={10}
					className='mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100'
					placeholder='A quick note…'
				/>
				{fieldErrors.message && (
					<p className='mt-1 text-xs text-red-600'>
						{fieldErrors.message[0]}
					</p>
				)}
			</div>

			{/* Honeypot */}
			<input
				type='text'
				name='website'
				defaultValue=''
				tabIndex={-1}
				autoComplete='off'
				className='sr-only'
				aria-hidden='true'
			/>

			<button
				type='submit'
				disabled={state === 'sending'}
				className='w-full rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60'
			>
				{state === 'sending' ? 'Sending…' : 'Send'}
			</button>

			{state === 'success' && (
				<p className='text-sm text-emerald-700'>
					Thanks! I’ll get back to you shortly.
				</p>
			)}
			{state === 'error' && error && (
				<p className='text-sm text-red-600'>{error}</p>
			)}
		</form>
	);
}
