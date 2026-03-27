import React from 'react';
import Section from '../components/Section';
import { experience } from '../content/experience';

export default function Experience() {
	return (
		<Section
			id='experience'
			title='Experience'
			subtitle='Turning complex challenges into measurable wins.'
		>
			<div className='space-y-6'>
				{experience.map((job) => (
					<div
						key={job.company}
						className='grid grid-cols-1 items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:grid-cols-[auto_1fr_auto]'
					>
						{/* <div className='h-10 w-10 rounded-lg bg-zinc-200' /> */}
						<img
							key={job.company}
							src={job.logo?.src}
							alt={job.logo?.alt}
							width={job.logo?.width}
							height={job.logo?.height}
							className='h-10 w-10 opacity-80 hover:opacity-100 transition'
							loading='lazy'
						/>
						<div>
							<div className='text-sm font-semibold'>
								{job.company}
							</div>
							<div className='text-sm text-zinc-600'>
								{job.role}
							</div>
							<div className='mt-1 text-xs text-zinc-500 md:hidden'>
								{job.dates}
							</div>
							<ul className='mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700'>
								{job.bullets.map((b) => (
									<li key={b}>{b}</li>
								))}
							</ul>
						</div>
						<div className='hidden text-xs text-zinc-500 md:block'>
							{job.dates}
						</div>
					</div>
				))}
			</div>
			{/* Inline Education (one-liner) */}
			<div className='mt-8 text-sm text-zinc-600'>
				🎓 <strong>B.S. in Business Management</strong>, Brigham Young
				University <br />
				📜 Certificates: Radical Product Thinking · Product Strategy ·
				Customer Development (LinkedIn Learning)
			</div>
		</Section>
	);
}
