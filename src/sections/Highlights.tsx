import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { highlights } from '../content/highlights';

export default function Highlights() {
	return (
		<Section
			id='highlights'
			title='Highlights'
			subtitle='A few standout wins'
			bg='bg-zinc-50' // Optional background color
		>
			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{highlights.map((h) => (
					<Card key={h.title}>
						<div className='text-2xl font-semibold text-zinc-900'>
							{h.metric}
						</div>
						<div className='mt-1 text-sm font-medium text-zinc-700'>
							{h.title}
						</div>
						<p className='mt-2 text-sm text-zinc-600'>{h.copy}</p>
						<div className='mt-3 flex gap-1 flex-wrap'>
							{h.tags?.map((tag) => (
								<Badge key={tag}>{tag}</Badge>
							))}
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
}
