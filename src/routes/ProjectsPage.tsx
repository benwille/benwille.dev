import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../content/projects';
import Seo from '../components/Seo';

export default function ProjectsPage() {
	const projects = getAllProjects();
	return (
		<main className='min-h-screen'>
			<Seo
			title="Projects – Ben Wille"
			description="Explore product management projects led by Ben Wille, including personalization, onboarding workflows, and platform programs."
			url="https://benwille.dev/projects"
		  />
			<Section
				id='projects-all'
				title='All Projects'
				subtitle={`Showing ${projects.length} case studies`}
				bg='bg-zinc-50'
			>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
					{projects.map((p) => (
						<ProjectCard key={p.slug} project={p} />
					))}
				</div>
			</Section>
			<div className='my-8 flex justify-center'>
				<a
					href='/'
					className='btn inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50'
				>
					← Back to Home
				</a>
			</div>
		</main>
	);
}
