import React from 'react';
import Card from './Card';
import Badge from './Badge';
import type { Project } from '../content/types';
import { Link } from 'react-router-dom';

export default function ProjectCard({
	project,
	onTagClick,
}: {
	project: Project;
	onTagClick?: (t: string) => void;
}) {
	const { slug, title, metric, tags, cover, summary } = project;
	return (
		<Card className='h-full'>
			<div className='aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100'>
				{cover ? (
					<img
						src={cover.src}
						alt={cover.alt}
						className='h-full w-full object-cover'
					/>
				) : (
					<div className='flex h-full w-full items-center justify-center text-sm text-zinc-500'>
						Project image
					</div>
				)}
			</div>

			<div className='mt-4'>
				<h3 className='text-lg font-semibold text-zinc-900'>{title}</h3>
				{metric && (
					<p className='mt-1 text-sm text-zinc-600'>
						Outcome:{' '}
						<span className='font-medium text-zinc-900'>
							{metric}
						</span>
					</p>
				)}
				{summary && (
					<p className='mt-2 text-sm text-zinc-600'>{summary}</p>
				)}

				<div className='mt-3 flex flex-wrap gap-2'>
					{tags.map((t) => (
						<Badge key={t} onClick={() => onTagClick?.(t)}>
							{t}
						</Badge>
					))}
				</div>

				<Link
					to={`/projects/${slug}`}
					className='btn mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700'
				>
					Read case study <span aria-hidden>→</span>
				</Link>
			</div>
		</Card>
	);
}
