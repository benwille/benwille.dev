// src/sections/Testimonials.tsx
import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { testimonials } from '../content/testimonials';

function getInitials(name: string) {
	return name
		.split(' ')
		.filter(Boolean)
		.map((n) => n[0]?.toUpperCase() ?? '')
		.slice(0, 2)
		.join('');
}

function Avatar({
	src,
	name,
	size = 80,
}: {
	src?: string;
	name: string;
	size?: number;
}) {
	const [errored, setErrored] = useState(false);
	const showFallback = !src || errored;

	return (
		<div
			className='h-20 w-20 overflow-hidden rounded-full ring-2 ring-emerald-500 shadow-md bg-white flex items-center justify-center'
			style={{ height: size, width: size }}
		>
			{showFallback ? (
				// Fallback: initials in a subtle circle
				<div className='flex h-full w-full items-center justify-center bg-zinc-100 text-zinc-600 text-lg font-semibold select-none'>
					{getInitials(name) || '?'}
				</div>
			) : (
				<img
					src={src}
					alt={name}
					className='h-full w-full object-cover'
					loading='lazy'
					onError={() => setErrored(true)}
				/>
			)}
		</div>
	);
}

export default function Testimonials() {
	return (
		<Section
			id='testimonials'
			title='Testimonials'
			subtitle='What others say'
		>
			<div className='grid gap-12 md:grid-cols-3'>
				{testimonials.map((t, idx) => (
					<div
						key={idx}
						className='relative flex flex-col items-center'
					>
						{/* Floating avatar */}
						<div className='absolute -top-10 z-10 flex justify-center'>
							<Avatar src={t.image} name={t.name} />
						</div>

						{/* Card content with padding to account for avatar */}
						<Card className='relative z-0 pt-14 text-center'>
							<blockquote className='italic text-zinc-700'>
								“{t.quote}”
							</blockquote>
							<p className='mt-3 font-bold'>{t.name}</p>
							<p className='text-sm text-zinc-500'>
								{t.title}
								{t.company && `, ${t.company}`}
							</p>
						</Card>
					</div>
				))}
			</div>
		</Section>
	);
}
