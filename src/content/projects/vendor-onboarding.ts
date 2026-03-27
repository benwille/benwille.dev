// src/content/projects/vendor-onboarding.ts
import type { Project } from '../types';

const project: Project = {
	slug: 'vendor-onboarding-acceleration',
	title: 'From Weeks to Days: Vendor Onboarding Acceleration',
	summary:
		'Integrated workflows into Salesforce to reduce onboarding time by 10 days and add ~$400k per vendor in revenue potential.',
	metric: '−10 days onboarding',
	tags: ['Ops', 'CRM', 'Salesforce', 'Process'],
	date: '2022-09-09',
	featured: true,
	cover: {
		src: '/assets/projects/vendor-onboarding-acceleration-cover.png',
		alt: 'Onboarding workflow with SLAs and task automation',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'Onboarding was fragmented across tools and teams. I mapped bottlenecks, aligned owners, and automated key steps directly in Salesforce.',
		outcomes: [
			'Reduced average onboarding by ~10 days.',
			'Improved data quality and task ownership across teams.',
			'Increased vendor revenue realization by ~$400k/vendor.',
		],
		decisions: [
			'Centralized truth in Salesforce with milestone gates.',
			'Automated checklists, SLA timers, and alerts for stalls.',
			'Added dashboards for ops and leadership visibility.',
		],
		notes: 'Future: self-serve onboarding portal and proactive risk scoring.',
	},
	links: { caseStudy: '', repo: '' },
};

export default project;
