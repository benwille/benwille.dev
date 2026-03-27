import { useEffect } from 'react';

type SeoProps = {
	title?: string;
	description?: string;
	image?: string; // absolute URL recommended for OG/Twitter
	url?: string; // canonical URL (absolute)
	noindex?: boolean;
};

function setTag(attr: 'name' | 'property', key: string, content?: string) {
	if (!content) return;
	let el = document.head.querySelector<HTMLMetaElement>(
		`meta[${attr}="${key}"]`
	);
	if (!el) {
		el = document.createElement('meta');
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute('content', content);
}

export default function Seo({
	title,
	description,
	image,
	url,
	noindex,
}: SeoProps) {
	useEffect(() => {
		const prevTitle = document.title;
		if (title) document.title = title;

		// Basic
		if (description) setTag('name', 'description', description);

		// Open Graph
		if (title) setTag('property', 'og:title', title);
		if (description) setTag('property', 'og:description', description);
		if (image) setTag('property', 'og:image', image);
		if (url) setTag('property', 'og:url', url);
		setTag('property', 'og:type', 'website');

		// Twitter
		setTag(
			'name',
			'twitter:card',
			image ? 'summary_large_image' : 'summary'
		);
		if (title) setTag('name', 'twitter:title', title);
		if (description) setTag('name', 'twitter:description', description);
		if (image) setTag('name', 'twitter:image', image);

		// Canonical
		if (url) {
			let link = document.head.querySelector<HTMLLinkElement>(
				'link[rel="canonical"]'
			);
			if (!link) {
				link = document.createElement('link');
				link.setAttribute('rel', 'canonical');
				document.head.appendChild(link);
			}
			link.setAttribute('href', url);
		}

		// Robots
		if (noindex) setTag('name', 'robots', 'noindex, nofollow');
		else {
			const robots = document.head.querySelector('meta[name="robots"]');
			if (robots) robots.remove();
		}

		return () => {
			// optional: restore previous title on unmount
			if (title) document.title = prevTitle;
		};
	}, [title, description, image, url, noindex]);

	return null;
}
