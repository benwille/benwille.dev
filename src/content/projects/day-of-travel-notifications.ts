// src/content/projects/day-of-travel-notifications.ts
import type { Project } from '../types';

const project: Project = {
	slug: 'day-of-travel-notifications',
	title: 'Day-of-Travel CX: Notifications & Workflows',
	summary:
		'Shifted comms from booker-only to traveler-aware with identity, opt-ins, and guardrails—raising contactable bookings to 90% and reducing support contacts by 7%.',
	metric: '66% → 90% contactable (+24 pts)',
	tags: ['Travel', 'CX', 'Notifications', 'Identity'],
	date: '2025-10-01',
	featured: true,
	cover: {
		src: '/assets/projects/day-of-travel-notifications-cover.png',
		alt: 'Journey map and comms triggers for day-of-travel',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'Messages went to the booker, not necessarily the traveler, which left guests uninformed—especially during IROPs. I led a redesign of traveler identity, consent, and channel rules so updates reach the right person at the right time.',
		outcomes: [
			'Bookings with traveler contact info increased from ~66% to ~90% (+24 pts).',
			'77% of individual guests provided contact details post-launch.',
			'Operations-notification audience grew by ~200k contacts in 3 months.',
			'Support contacts decreased by ~7% as basic status questions dropped.',
			'IROP wait-time improvement: pending final reporting (to be appended).',
		],
		decisions: [
			'Auto-prefilled known traveler details to reduce input friction.',
			'Allowed travelers to replace/update the contact owner (not just bookers).',
			'Default opt-in to operational notifications with visible controls (quiet hours, frequency caps).',
			'Established channel priority (Push > SMS > Email), deduplication, and fallbacks.',
			'Instrumented trigger health, delivery success, and latency monitoring.',
		],
		notes: 'Metrics rounded; IROP wait-time deltas to be added once finalized. Screenshots available: identity capture screen, channel selector, and delivery dashboard.',
	},
	links: { caseStudy: '', repo: '' },
};

export default project;
