// src/content/projects/flight-compensation-tool.ts
import type { Project } from '../types';

const project: Project = {
	slug: 'flight-compensation-tool',
	title: 'Flight Compensation: Cash-Value Credits with Policy Guardrails',
	summary:
		'Replaced points-based compensation with cash-value flight credits, merged 3 tools into 1 workflow, and cut time-to-compensate by 50%+.',
	metric: '−50%+ handling time',
	tags: ['Travel', 'Operations', 'Automation', 'Loyalty', 'Service Design'],
	date: '2026-01-01', 
	featured: true,
	cover: {
		src: '/assets/projects/flight-compensation-cover.png',
		alt: 'Eligibility → amount → issue flow with audit and history tabs',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'Previously we issued loyalty points for disruption compensation—creating the unintended outcome of awarding status for a bad experience and leaving some guests unsure of the real value. I led a new tool that issues cash-value flight credits instead, embeds policy logic, and lives inside the ops stack the team already uses.',
		outcomes: [
			'Reduced time to compensate guests by 50%+ (fewer handoffs, fewer tabs).',
			'Consolidated 3 separate tools → 1 integrated workflow in the ops system.',
			'One of the fastest-adopted internal products in company history.',
			'Improved guest perception by moving from points (ambiguous value) to credits (cash value).',
		],
		decisions: [
			'Chose flight credits over vouchers/points: familiar to guests and has clear, inherent value.',
			'Aligned compensation expiration to 12 months to match other credit policies.',
			'Added custom-amount entry for edge cases beyond the standard dropdowns.',
			'Built permissions, audit trails, and void controls to prevent misuse and support QA.',
			'Auto-attach credits for guests with a loyalty number on file; added a quick-attach path post-account creation for everyone else.',
			'Merged the legacy issue, track, and report steps into a single UI with eligibility checks and evidence upload.',
		],
		notes: 'Screens available: eligibility screen, issue modal with custom amount, history/audit tab (export + void).',
	},
	links: {
		caseStudy: '', // optional long-form write-up
		repo: '',
	},
};

export default project;