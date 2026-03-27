// src/content/projects/real-media-attribution.ts
import type { Project } from '../types';

const project: Project = {
	slug: 'real-media-attribution',
	title: 'Closing the Loop: Traditional → Digital Attribution',
	summary:
		'Built a hybrid attribution tool on top of GA and internal data to quantify lift from traditional media; drove +4% digital revenue.',
	metric: '+4% revenue',
	tags: ['Analytics', 'Attribution', 'MarTech'],
	date: '2021-03-06',
	featured: false,
	cover: {
		src: '/assets/projects/real-media-attribution-cover.png',
		alt: 'Attribution model and validation report',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'Clients invested in radio/TV without clear digital impact. I built a simple, transparent model to estimate incremental traffic and revenue.',
		outcomes: [
			'Attributed lift from traditional placements.',
			'Shifted budgets to higher-ROI mixes.',
			'Delivered ~4% digital revenue increase.',
		],
		decisions: [
			'Chose an interpretable model over a black-box MMM.',
			'Aligned on source tagging and validation windows.',
			'Built decision dashboards for planners.',
		],
		notes: 'Future: channel saturation curves and weekly spend guidance.',
	},
	links: { caseStudy: '', repo: '' },
};

export default project;
