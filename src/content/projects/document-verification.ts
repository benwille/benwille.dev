// src/content/projects/document-verification.ts
import type { Project } from '../types';

const project: Project = {
	slug: 'document-verification',
	title: 'Document Verification for International Travel',
	summary:
		'Launched an MVP that lets international guests scan passports and verify travel documents before arriving at the airport, reducing counter dependency and improving readiness for travel.',
	metric: 'MVP launched',
	tags: ['Travel', 'International', 'Check-in', 'OCR', 'Operations'],
	date: '2026-03-18',
	featured: true,
	cover: {
		src: '/assets/projects/document-verification-cover.png',
		alt: 'Passport scan, verified traveler details, and boarding pass with docs approved',
		width: 1600,
		height: 900,
	},
	body: {
		intro: 'Before launch, every international guest had to stop at the airport counter for manual document verification. That added friction for guests, created unnecessary counter congestion, and limited how far we could push self-service check-in. I led the MVP for a document verification experience that allows guests to scan passports, confirm details, and complete key travel readiness steps before they arrive at the airport.',

		outcomes: [
			'Launched the MVP for international document verification on March 18, 2026.',
			'Enabled self-service passport scanning and review instead of relying solely on airport counter checks.',
			'Improved guest readiness by surfacing document status directly in the travel flow.',
			'Created a scalable foundation for broader international travel requirements and document support in future phases.',
		],

		decisions: [
			'Started with an MVP centered on passport scanning and review to solve the highest-friction step first.',
			'Used OCR-based scanning so guests could avoid manual entry and reduce input errors.',
			'Integrated verification into the existing travel readiness flow instead of creating a separate disconnected experience.',
			'Displayed document status in a way that translated directly to the boarding-pass experience, making readiness visible and actionable.',
		],

		notes: 'Current screenshots show the passport scan experience, successful OCR capture and edit flow, multi-passenger readiness states, and boarding pass status after document verification. Future phases can expand coverage, requirements handling, and additional document types.',
	},
	links: {
		caseStudy: '',
		repo: '',
	},
};

export default project;
