import type { Project } from '../types';

// Import each project (explicit keeps it simple & type-safe)
import unsubscribePreferenceCenter from './unsubscribe-preference-center';
import vendorOnboarding from './vendor-onboarding';
import couponParity from './coupon-parity';
import movableInkAbandonment from './movable-ink-abandonment';
import campaignOps from './campaign-ops';
import dayOfTravelNotifications from './day-of-travel-notifications';
import marketingCloudPersonalization from './marketing-cloud-personalization';
import realMediaAttribution from './real-media-attribution';
import areYouReady from './are-you-ready-video';
import flightCompensationTool from './flight-compensation-tool';
import documentVerification from './document-verification';

const all: Project[] = [
	unsubscribePreferenceCenter,
	vendorOnboarding,
	couponParity,
	movableInkAbandonment,
	campaignOps,
	dayOfTravelNotifications,
	marketingCloudPersonalization,
	realMediaAttribution,
	areYouReady,
	flightCompensationTool,
	documentVerification,
];

// Helpers
export function getAllProjects(): Project[] {
	// newest first by date, then featured
	return [...all].sort((a, b) => {
		const da = a.date ? Date.parse(a.date) : 0;
		const db = b.date ? Date.parse(b.date) : 0;
		if (db !== da) return db - da;
		return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
	});
}

export function getFeaturedProjects(limit = 3): Project[] {
	const sorted = getAllProjects();
	const featured = sorted.filter((p) => p.featured);
	if (featured.length >= limit) return featured.slice(0, limit);

	const rest = sorted.filter((p) => !p.featured);
	return [...featured, ...rest].slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
	return all.find((p) => p.slug === slug);
}

export function getProjectsByTag(tag: string): Project[] {
	return getAllProjects().filter((p) => p.tags.includes(tag));
}

export default all;
