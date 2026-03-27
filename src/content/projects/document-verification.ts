// src/content/projects/document-verification.ts
import type { Project } from '../types';

const project: Project = {
	slug: 'document-verification',
	title: 'Document Verification for International Travel',
	summary:
		'Launched an MVP that lets international guests scan passports and verify documents before arriving at the airport, reducing counter dependency and laying the foundation for near-full international coverage.',
	metric: 'MVP live in 2026',
	tags: ['Travel', 'International', 'OCR', 'Operations', 'Check-in'],
	date: '2026-03-18',
	featured: true,
	cover: {
		src: '/assets/projects/document-verification/cover.jpg',
		alt: 'International document verification flow with passport scan and approval states',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'Every international guest previously had to stop at the ticket counter for manual document verification. With limited staffing at many stations, that created bottlenecks, longer waits, and unnecessary friction during check-in. I led the MVP for a self-service document verification experience that uses passport OCR, verification logic, and phased expansion to move more guests through check-in before they ever reach the airport.',

		outcomes: [
			'Launched MVP on 2026-03-18 for passport OCR and core verification flow.',
			'MVP expected to support roughly 90% of international guests on eligible paths.',
			'Created a phased roadmap to expand coverage to ~99% with full MRZ and Timatic-driven requirements.',
			'Built on existing OCR and Timatic contracts instead of purchasing a new end-to-end vendor solution.',
		],

		decisions: [
			'Rolled out gradually instead of trying to solve every nationality/destination combination in one release.',
			'Excluded automatic name matching from MVP to reduce false negatives from nicknames, transliterations, and hyphenation edge cases.',
			'Extended existing OCR scanner and Timatic contracts instead of buying a new vendor product.',
			'Defined clear boarding-pass logic for happy path, conditional secure flight cases, and destination-specific requirements.',
		],

		notes: 'The stakeholder overview includes post-launch data tables, Timatic scenario discovery, and MVP/v1/v2/v3 scope planning. Supporting screenshots available: add-passport screen, scan flow, and scan-results review.',
	},
	links: {
		caseStudy: '',
		repo: '',
	},
};

export default project;
