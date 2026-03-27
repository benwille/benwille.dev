// src/sections/ProjectsHome.tsx
import React, { useMemo, useState } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects, getFeaturedProjects } from '../content/projects';

export default function ProjectsHome({ limit = 3 }: { limit?: number }) {
	const [activeTag, setActiveTag] = useState<string | null>(null);

	const all = getAllProjects();

	const tags = useMemo(() => {
		const s = new Set<string>();
		all.forEach((p) => p.tags.forEach((t) => s.add(t)));

		return ['All', ...Array.from(s).sort((a, b) => a.localeCompare(b))];
	}, [all]);

	const visible = useMemo(() => {
		// If no filter (or "All"), prefer featured with back-fill
		if (!activeTag || activeTag === 'All') {
			return getFeaturedProjects(limit);
		}
		// If a filter is selected, ignore featured flag and just take matching projects up to limit
		return all.filter((p) => p.tags.includes(activeTag)).slice(0, limit);
	}, [all, activeTag, limit]);

	return (
		<Section
			id='projects'
			title='Projects'
			subtitle='Click tags to filter; click again to clear.'
			bg='bg-zinc-50'
		>
			<div className='mb-5 flex flex-wrap items-center gap-2'>
				{tags.map((t) => (
					<button
						key={t}
						onClick={() =>
							setActiveTag((prev) => (prev === t ? null : t))
						}
						className={`btn inline-flex items-center rounded-full border px-3 py-1 text-xs ${
							activeTag === t || (!activeTag && t === 'All')
								? 'border-emerald-600 bg-emerald-50 text-emerald-700'
								: 'border-zinc-200 bg-white text-zinc-700 hover:bg-emerald-50 hover:text-emerald-700'
						}`}
					>
						{t}
					</button>
				))}
			</div>

			<div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
				{visible.map((p) => (
					<ProjectCard
						key={p.slug}
						project={p}
						onTagClick={(t) => setActiveTag(t)}
					/>
				))}
				{visible.length === 0 && (
					<div className='col-span-full rounded-2xl border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-600'>
						No projects match that tag.
					</div>
				)}
			</div>

			<div className='mt-6'>
				<a
					href='/projects'
					className='btn inline-flex items-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50'
				>
					View all projects
				</a>
			</div>
		</Section>
	);
}
