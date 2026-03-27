// src/content/projects/coupon-parity.ts
import type { Project } from '../types';

const project: Project = {
	slug: 'coupon-system-parity',
	title: 'Coupon Parity, Zero Tech Debt: Shopify Workaround',
	summary:
		'Recreated Overstock’s coupon system on Shopify’s backend to preserve customer expectations while saving $1M annually.',
	metric: '$1M annual savings',
	tags: ['e-Commerce', 'Growth', 'Experimentation'],
	date: '2024-03-28',
	featured: false,
	cover: {
		src: '/assets/projects/coupon-system-parity-cover.png',
		alt: 'Coupon rules matrix and edge case flow',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'A platform migration lacked native coupon parity. I led a pragmatic solution that mimicked legacy rules without accruing new debt.',
		outcomes: [
			'Preserved key promo behaviors customers expected.',
			'Eliminated waste, driving ~$1M annual savings.',
			'Kept architectural optionality for future native solution.',
		],
		decisions: [
			'Implemented rules as composable checks with audit logs.',
			'Scoped MVP to top redemption scenarios to ship quickly.',
			'Instrumented misuse detection and guardrails.',
		],
		notes: 'Later plan: migrate to a native promo engine when feasible.',
	},
	links: { caseStudy: '', repo: '' },
};

export default project;