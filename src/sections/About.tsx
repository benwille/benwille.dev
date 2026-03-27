import React from 'react';
import Section from '../components/Section';
import Badge from '../components/Badge';
import ImageFrame from '../components/ImageFrame';
import { about } from '../content/about';

export default function About() {
	return (
		<Section
			id='about'
			title='About'
			subtitle='Professional snapshot with a little personality.'
			compact
		>
			<div className='grid grid-cols-1 items-center gap-8 md:grid-cols-3'>
				<div className='md:col-span-2 self-start'>
					<p className='text-zinc-700'>
						{about.blurb.split('||').map((paragraph, i) => (
							<p key={i} className='mb-4'>{paragraph}</p>
						))}
					</p>
					<div className='mt-4 flex flex-wrap gap-2'>
						{about.tags.map((tag) => (
							<Badge key={tag}>{tag}</Badge>
						))}
					</div>
				</div>
				<div className='md:-mt-8'>
					<ImageFrame image={about.lifestyleImage} />
				</div>
			</div>
		</Section>
	);
}
