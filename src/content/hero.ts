import type { Logo, ImageRef } from "./types";

export const heroPortrait: ImageRef = {
  src: "/assets/images/E2B669C1-B35D-405E-B281-48CF2BA5ADF8.JPG", ///assets/portraits/headshot.jpg
  alt: "Ben Wille headshot",
  width: 720,  // guidance only — no need to match exactly
  height: 900,
};

export const heroLogos: Logo[] = [
	{
		name: 'Breeze',
		src: '/assets/logos/breeze.svg',
		width: 80,
		height: 28,
		alt: 'Breeze Airways',
	},
	{
		name: 'Overstock',
		src: '/assets/logos/overstock.svg',
		width: 80,
		height: 28,
		alt: 'Overstock',
	},
	{
		name: 'Beyond',
		src: '/assets/logos/beyond.svg',
		width: 80,
		height: 28,
		alt: 'Beyond, Inc.',
	},
	{
		name: 'Real Media',
		src: '/assets/logos/realmediaslc.png',
		width: 40,
		height: 28,
		alt: 'Real Media SLC',
	},
	{
		name: 'Real Salt Lake',
		src: '/assets/logos/rsl.svg',
		width: 40,
		height: 28,
		alt: 'Real Salt Lake',
	},
	{
		name: 'jetBlue',
		src: '/assets/logos/jetblue.svg',
		width: 80,
		height: 28,
		alt: 'jetBlue Airways',
	},
];

/**
 * Sizing notes:
 * - Keep logos roughly 80–100px wide (auto height).
 * - Prefer SVG; if PNG, export on transparent background.
 * - Update files in /public/assets/logos and just keep the same filenames to avoid code changes.
 */
