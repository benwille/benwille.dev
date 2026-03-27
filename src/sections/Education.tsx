import React from 'react';
import Section from '../components/Section';

export default function Education() {
	return (
		<Section id='education' title='Education'>
			<ul className='space-y-2 text-sm'>
				<li>
					<strong>B.S. Marketing</strong>, University of Utah
				</li>
				<li>
					Certifications: Product Strategy, Agile Foundations
					(LinkedIn Learning)
				</li>
			</ul>
		</Section>
	);
}
