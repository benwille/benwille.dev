// src/content/projects/movable-ink-abandonment.ts
import type { Project } from '../types';

const project: Project = {
	slug: 'movable-ink-abandonment',
	title: 'Personalization at Scale: Abandonment Lift',
	summary:
		'Launched ~20 Movable Ink use cases; abandonment flows delivered +75% conversion and saved a day/week in ops.',
	metric: '+75% conversion',
	tags: ['Personalization', 'Email', 'Automation'],
	date: '2025-02-18',
	featured: true,
	cover: {
		src: '/assets/projects/movable-ink-abandonment-cover.png',
		alt: 'Dynamic content decisioning for abandonment triggers',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'We scaled dynamic content and triggers with Movable Ink, standardizing governance, QA, and experimentation across brands.',
		outcomes: [
			'Abandonment program lifted conversion by ~75%.',
			'Saved ~1 day/week per manager via modular templates.',
			'Improved QA pass rates and reduced defects.',
		],
		decisions: [
			'Moved from static rules to intent signal clusters.',
			'Adopted slot-based template architecture for reuse.',
			'Established guardrails for frequency and channel priority.',
		],
		notes: 'Next: cross-channel orchestration and predictive triggers.',
	},
	links: { caseStudy: '', repo: '' },
};

export default project;
