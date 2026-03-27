import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import { getProjectBySlug } from '../content/projects';
import Seo from '../components/Seo';

export default function ProjectDetailPage() {
	const { slug } = useParams();
	const project = slug ? getProjectBySlug(slug) : undefined;

	if (!project) {
		return (
			<main className='min-h-screen'>
				<Section id='not-found' title='Project not found'>
					<Link
						to='/projects'
						className='text-emerald-600 hover:underline'
					>
						← Back to all projects
					</Link>
				</Section>
			</main>
		);
	}

	const { title, metric, tags, cover, body, links } = project;

	return (
		<main className='min-h-screen'>
			<Seo
				title={`${project.title} – Project by Ben Wille`}
				description={project.summary}
				image={
					project.cover?.src
						? `https://benwille.dev${project.cover.src}`
						: undefined
				}
				url={`https://benwille.dev/projects/${project.slug}`}
			/>
			<Section
				id='project'
				title={title}
				subtitle={metric ? `Outcome: ${metric}` : undefined}
				bg='bg-white'
			>
				{cover && (
					<img
						src={cover.src}
						alt={cover.alt}
						className='mb-6 w-full rounded-2xl border border-zinc-200'
					/>
				)}

				{body?.intro && <p className='text-zinc-700'>{body.intro}</p>}

				<div className='mt-6 grid gap-6 md:grid-cols-2'>
					{body?.outcomes && (
						<div>
							<h3 className='text-sm font-semibold text-zinc-900'>
								Outcomes
							</h3>
							<ul className='mt-2 list-disc pl-5 text-sm text-zinc-700'>
								{body.outcomes.map((o) => (
									<li key={o}>{o}</li>
								))}
							</ul>
						</div>
					)}
					{body?.decisions && (
						<div>
							<h3 className='text-sm font-semibold text-zinc-900'>
								Key decisions
							</h3>
							<ul className='mt-2 list-disc pl-5 text-sm text-zinc-700'>
								{body.decisions.map((d) => (
									<li key={d}>{d}</li>
								))}
							</ul>
						</div>
					)}
				</div>

				{/* Optional notes */}
				{body?.notes && (
					<div className='mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4'>
						<h3 className='text-sm font-semibold text-zinc-900'>
							Notes & context
						</h3>
						<p className='mt-2 text-sm text-zinc-700'>
							{body.notes}
						</p>
					</div>
				)}

				<div className='mt-8 flex flex-wrap gap-2'>
					{tags.map((t) => (
						<span
							key={t}
							className='inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700'
						>
							{t}
						</span>
					))}
				</div>

				{/* Optional links */}
				{(links?.caseStudy || links?.repo) && (
					<div className='mt-6 flex flex-wrap gap-3'>
						{links?.caseStudy && (
							<a
								href={links.caseStudy}
								target='_blank'
								rel='noopener noreferrer'
								className='btn inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700'
							>
								Read full case study <span aria-hidden>↗</span>
							</a>
						)}
						{links?.repo && (
							<a
								href={links.repo}
								target='_blank'
								rel='noopener noreferrer'
								className='btn inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50'
							>
								View repository <span aria-hidden>↗</span>
							</a>
						)}
					</div>
				)}

				<div className='mt-8'>
					<Link
						to='/projects'
						className='text-emerald-600 hover:underline'
					>
						← Back to all projects
					</Link>
				</div>
			</Section>
		</main>
	);
}
