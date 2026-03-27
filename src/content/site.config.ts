import type { SiteConfig } from "./types";

const siteConfig: SiteConfig = {
	siteUrl: 'https://benwille.dev',
	resumeUrl: '/assets/documents/Ben_Wille_Resume.pdf',
	resumeFilename: 'Ben-Wille-Resume.pdf', // nice download name
	resumeUpdatedFallback: '2025-08-01', // ISO date string (optional)
	brand: { primary: '#10B981' }, // emerald
};

export default siteConfig;
