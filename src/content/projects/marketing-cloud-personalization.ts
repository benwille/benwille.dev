// src/content/projects/marketing-cloud-personalization.ts
import type { Project } from '../types';

const project: Project = {
	slug: 'marketing-cloud-personalization',
	title: '21 Use Cases in 6 Months: SFMC Personalization',
	summary:
		'Led cross-functional rollout of Salesforce Marketing Cloud Personalization across 21 use cases with governance and measurement.',
	metric: '21 use cases live',
	tags: ['Personalization', 'Salesforce', 'MarTech'],
	date: '2024-08-17',
	featured: false,
	cover: {
		src: '/assets/projects/marketing-cloud-personalization-cover.png',
		alt: 'Use-case roadmap and governance framework',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'The team needed a scalable framework for personalization. I stood up governance, backlog triage, and measurement to ship at pace.',
		outcomes: [
			'Launched 21 prioritized use cases in ~6 months.',
			'Created a repeatable intake, QA, and launch process.',
			'Improved transparency with impact reporting.',
		],
		decisions: [
			'Adopted a value/effort intake rubric and RACI.',
			'Standardized QA checklists and data contracts.',
			'Defined success metrics per use case before launch.',
		],
		notes: 'Next: trait unification and cross-channel unification.',
	},
	links: { caseStudy: '', repo: '' },
};

export default project;
