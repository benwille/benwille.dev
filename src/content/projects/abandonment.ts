import type { Project } from '../types';

const project: Project = {
	slug: 'abandonment-personalization',
	title: 'Abandonment personalization system',
	summary:
		'Rebuilt decisioning & templates; launched 20+ use cases cross-channel.',
	metric: '+75% conversion',
	tags: ['Personalization', 'Growth', 'Email'],
	date: '2024-10-15',
	featured: true,
	cover: {
		src: '/assets/projects/abandonment-cover.jpg',
		alt: 'Personalization flow diagram',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'We replaced brittle abandonment logic with a dynamic decisioning engine and modular templates across email/push.',
		outcomes: [
			'Lifted abandonment conversion by 75%.',
			'Cut campaign production time by 60%.',
			'Enabled experimentation on triggers, offers, and creatives.',
		],
		decisions: [
			'Segment users by intent signals instead of static rules.',
			'Template system with slots for offer/content variants.',
			'Guardrails for frequency, caps, and channel priority.',
		],
	},
};

export default project;
