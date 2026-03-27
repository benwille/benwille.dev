// src/content/projects/campaign-build-ops.ts
import type { Project } from '../types';

const project: Project = {
	slug: 'campaign-build-ops',
	title: '20% Faster Campaigns: Ops + Templates',
	summary:
		'Audited workflow, built templates/automation, and reduced campaign build time by ~20% (~6 hrs/week/manager).',
	metric: '−20% build time',
	tags: ['Ops', 'Process', 'Automation'],
	date: '2025-02-10',
	featured: false,
	cover: {
		src: '/assets/projects/campaign-build-ops-cover.png',
		alt: 'Template system and workflow diagram',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'Inconsistent campaign builds slowed velocity. I standardized process, templates, and automation with clear SLAs and QA gates.',
		outcomes: [
			'Cut build time by ~20% per campaign.',
			'Reduced rework with better briefs and templates.',
			'Improved throughput without headcount.',
		],
		decisions: [
			'Introduced templated briefs and slot-based components.',
			'Automated routine checks and content pulls.',
			'Instrumented cycle-time and defect dashboards.',
		],
		notes: 'Future: brief-to-build generator and asset linting.',
	},
	links: { caseStudy: '', repo: '' },
};

export default project;
