// src/content/projects/project-template.ts
import type { Project } from '../types';

/**
 * How to use this template:
 * 1) Duplicate this file and rename it, e.g. `great-project.ts`.
 * 2) Fill in the fields below (keep `slug` unique).
 * 3) Add the new file to `src/content/projects/index.ts` `all` array.
 * 4) Put any images in `/public/assets/projects/` and reference them with a leading slash.
 *
 * Notes:
 * - `date` is used for sorting (newest first). Use ISO: YYYY-MM-DD.
 * - Set `featured: true` to prefer it on the home page (we back-fill to the limit).
 * - Keep tags short and reusable (used for filters).
 */

const project: Project = {
	// URL slug for /projects/:slug (must be unique)
	slug: 'your-project-slug', // TODO

	// Card & detail title
	title: 'Your Project Title', // TODO

	// 1–2 sentence summary for cards and list pages
	summary:
		'A concise, outcome-oriented description used on cards and lists. Keep to one or two sentences.', // TODO

	// Optional key metric to highlight on cards/detail
	metric: '+75% conversion', // TODO (or remove)

	// Tag list used for filters (keep consistent casing)
	tags: ['Personalization', 'Growth', 'Email'], // TODO

	// Sort key (newest first). Use ISO date: YYYY-MM-DD.
	date: '2025-01-15', // TODO

	// Show on homepage preferentially (the home section will back-fill to the limit)
	featured: true, // TODO (true/false)

	// Optional cover image for card and detail page
	cover: {
		src: '/assets/projects/your-cover.jpg', // TODO: place file at public/assets/projects/...
		alt: 'Diagram or screenshot describing the project', // TODO
		width: 1600, // optional
		height: 900, // optional
	},

	// Optional rich body content for the detail page
	body: {
		intro: 'Short narrative intro: the problem, context, constraints, your role, and what success looked like.', // TODO

		// Outcome bullets (measurable results)
		outcomes: [
			'Lifted abandonment conversion by 75%.', // TODO
			'Reduced campaign build time by 60%.', // TODO
			'Improved deliverability by 8%.', // TODO
		],

		// Decision bullets (notable choices, tradeoffs, architecture, scope)
		decisions: [
			'Segmented users by intent signals instead of static rules.', // TODO
			'Modularized templates with slot-based rendering for speed.', // TODO
			'Introduced guardrails for frequency and channel priority.', // TODO
		],

		// Optional freeform notes, caveats, or follow-ups
		notes: 'Any additional context, learnings, or future work worth mentioning.', // TODO or remove
	},

	// Optional external links
	links: {
		caseStudy: '', // e.g., Notion/Medium link (optional)
		repo: '', // e.g., GitHub link (optional, often N/A for PM work)
	},
};

export default project;
