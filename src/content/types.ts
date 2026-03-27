export type Logo = { name: string; src: string; width?: number; height?: number; alt?: string };
export type ImageRef = { src: string; alt: string; width?: number; height?: number };

export type Highlight = { metric: string; title: string; copy: string; tags?: string[] };
export type ExperienceItem = { company: string; role: string; dates: string; bullets: string[]; logo?: Logo };
export type Testimonial = {
	quote: string;
	name: string;
	title?: string;
	company?: string;
	image?: string; // path to image in /public/assets or full URL
};
export type SkillsGroup = { heading: string; items: string[]; callout: string };

export type SiteConfig = {
	siteUrl: string;              // e.g. "https://bwille.com"
  resumeUrl: string;              // e.g. "/assets/resume/ben-wille-resume.pdf"
  resumeFilename: string;         // e.g. "Ben-Wille-Resume.pdf" for downloads"
  resumeUpdatedFallback?: string; // ISO date string, e.g. "2025-08-01" (optional)
  brand: { primary: string };     // hex or tailwind token if you want to centralize
};

export type ProjectImage = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export type Project = {
	slug: string; // "abandonment-personalization"
	title: string; // "Abandonment personalization system"
	summary: string; // 1–2 sentences for cards/lists
	metric?: string; // "+75% conversion"
	tags: string[]; // ["Personalization", "Growth", "Email"]
	cover?: ProjectImage; // hero/thumbnail
	date?: string; // "2025-03-20" (for sorting)
	featured?: boolean; // show on homepage first
	links?: {
		caseStudy?: string; // external or internal deep link
		repo?: string;
	};
	// Optional rich content for detail page (keep it simple: paragraphs + bullets)
	body?: {
		intro?: string;
		outcomes?: string[];
		decisions?: string[];
		notes?: string;
	};
};