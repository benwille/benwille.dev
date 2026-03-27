// src/utils/url.ts
import siteConfig from '../content/site.config';
export const absoluteUrl = (p: string) =>
	p.startsWith('http') ? p : siteConfig.siteUrl.replace(/\/+$/, '') + p;
