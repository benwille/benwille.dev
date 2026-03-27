import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { skills } from '../content/skills';


export default function Skills() {

  return (
		<Section
			id='skills'
			title='Skills & Tools'
			subtitle='Organized by discipline, backed by results.'
			bg='bg-zinc-50'
		>
			<div className='grid grid-cols-1 gap-6 sm:grid-cols-4'>
				{skills.map((col) => (
					<Card key={col.heading}>
						<div className='text-sm font-semibold'>
							{col.heading}
						</div>
						<div className='mt-2 flex flex-wrap gap-2'>
							{col.items.map((it) => (
								<Badge key={it}>{it}</Badge>
							))}
						</div>
						<p className='mt-3 text-xs text-zinc-500'>
							{col.callout}
						</p>
					</Card>
				))}
			</div>
		</Section>
  );
}
