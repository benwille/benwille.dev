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
	slug: 'rsl-team-store-are-you-ready', // TODO

	// Card & detail title
	title: 'Are You Ready?', // TODO

	// 1–2 sentence summary for cards and list pages
	summary:
		'30-second stadium + social video to showcase breadth of merch without overwhelming fans; moved average per-game store sales from $38k to $51k.',

	// Optional key metric to highlight on cards/detail
	metric: '+$13k avg/game (+34%)', // TODO

	// Tag list used for filters (keep consistent casing)
	tags: ['Marketing', 'Video'], // TODO

	// Sort key (newest first). Use ISO date: YYYY-MM-DD.
	date: '2021-09-15', // TODO

	// Show on homepage preferentially (the home section will back-fill to the limit)
	featured: false, // TODO (true/false)

	// Optional cover image for card and detail page
	cover: {
		src: '/assets/projects/Are-You-Ready-Screenshot.jpg', // TODO: place file at public/assets/projects/...
		alt: 'Diagram or screenshot describing the project', // TODO
		width: 1600, // optional
		height: 900, // optional
	},

	// Optional rich body content for the detail page
	body: {
		intro: 'The team store had huge inventory (apparel, hats, jackets, etc.) but every attempt to promote it either highlighted a single item or overwhelmed fans with a collage. We produced a 30-second “Are You Ready” hype video designed for the jumbotron and repurposed for social ads—fast cuts by category, bold slates, and a clear CTA to visit the store on matchday.',

		outcomes: [
			'Raised average per-game sales from ~$38k to ~$51k (+$13k, ~+34%).',
			'Recorded the highest single-day store revenue at ~$72k.',
			'Gave marketing a reusable asset for in-stadium loops and paid social placements.',
		],

		decisions: [
			'Storyboarded a fast-cut sequence that sampled many items without cognitive overload (short shots, category slates, rhythm synced to crowd energy).',
			'Designed for silent playback first (readable slates/CTAs, on-screen pricing optional), with an audio bed added for social.',
			'Produced modular edits (30s stadium cut, 15s social cut) to fit placements and frequency caps.',
		],

		// notes: 'Numbers are rounded. If you want, we can add the original upload link or stills as supporting images.',
	},

	// Optional external links
	links: {
		caseStudy:
			'/assets/video/09_RSLAd__AreYouReady_Final.mp4', // e.g., Notion/Medium link (optional)
		repo: '', // e.g., GitHub link (optional, often N/A for PM work)
	},
};

export default project;
