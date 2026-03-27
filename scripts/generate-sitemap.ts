// scripts/generate-sitemap.ts
import fs from 'fs';
import path from 'path';
import siteConfig from '../src/content/site.config';
import allProjects from '../src/content/projects'; // your `all` export or default

type Project = {
	slug: string;
	date?: string; // YYYY-MM-DD (optional)
};

const BASE = siteConfig.siteUrl.replace(/\/+$/, ''); // no trailing slash

function url(loc: string, priority: number, lastmod?: string) {
	return [
		'  <url>',
		`    <loc>${loc}</loc>`,
		lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
		`    <priority>${priority.toFixed(1)}</priority>`,
		'  </url>',
	]
		.filter(Boolean)
		.join('\n');
}

function iso(d?: string) {
	if (!d) return undefined;
	// Ensure it’s a valid ISO date (fallback to today if not)
	const dt = new Date(d);
	return isNaN(dt.getTime()) ? undefined : dt.toISOString().slice(0, 10);
}

function main() {
	const urls: string[] = [];

	// Home
	urls.push(url(`${BASE}/`, 1.0));

	// Projects index page
	urls.push(url(`${BASE}/projects`, 0.8));

	// Each project detail page
	(allProjects as Project[]).forEach((p) => {
		urls.push(url(`${BASE}/projects/${p.slug}`, 0.7, iso(p.date)));
	});

	const xml =
		`<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
		urls.join('\n') +
		`\n</urlset>\n`;

	const outDir = path.resolve('public');
	if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

	const outFile = path.join(outDir, 'sitemap.xml');
	fs.writeFileSync(outFile, xml, 'utf8');
	console.log(`✅ Wrote ${outFile}`);
}

main();
