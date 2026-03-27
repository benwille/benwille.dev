import type { Logo, ExperienceItem } from "./types";

export const logos: Logo[] = [
	{
		name: 'breeze',
		src: '/assets/logos/breeze.svg', // or .png
		alt: 'Breeze Airways logo',
	},
	{
		name: 'beyond',
		src: '/assets/logos/beyond.svg', // or .png
		alt: 'Beyond, Inc. logo',
	},
	{
		name: 'realMedia',
		src: '/assets/logos/realmediaslc.png', // or .png
		alt: 'Real Media SLC logo',
	},
	{
		name: 'rsl',
		src: '/assets/logos/rsl.svg', // or .png
		alt: 'Real Salt Lake logo',
	},
	{
		name: 'jetblue',
		src: '/assets/logos/jetblue.svg', // or .png
		alt: 'jetBlue Airways logo',
	},
];

export const experience: ExperienceItem[] = [
	{
		company: 'Breeze Airways',
		role: 'Senior Product Manager — Travel Experience',
		dates: '2025 – Present',
		bullets: [
			'Lead product for Breeze’s day-of-travel experience across communications, check-in, disruption handling, and self-service.',
			'Launched per-passenger contact capture, increasing contactable bookings from 66% to 90% and reducing customer service contacts by 7%.',
			'Built a flight compensation tool that replaced points with cash-value credits, consolidated 3 tools into 1, and cut handling time by 50%+.',
			'Shipped the MVP for international document verification, reducing required in-person verification from 100% to 80%.',
			'Partner across Ops, CX, Marketing, Engineering, and Analytics to turn complex workflows into simpler guest experiences.',
		],
		logo: logos.find((l) => l.name === 'breeze'),
	},
	{
		company: 'Beyond, Inc. (Bed Bath & Beyond, Overstock, BuyBuyBaby)',
		role: 'Senior Product Manager — Marketing Technology',
		dates: '2022 – 2025',
		bullets: [
			'Rolled out Salesforce Marketing Cloud Personalization across 21 use cases, driving significant conversion lifts and operational efficiencies.',
			'Built a Shopify backend solution to mirror Overstock’s coupon system, saving ~$1M annually while preserving customer expectations.',
			'Created an unsubscribe survey + preference center (100K+ responses) that reduced email unsubscribes by ~80%.',
			'Delivered ~20 Movable Ink personalization use cases; abandonment emails converted 75% higher and saved ~1 day/week in operations.',
			'Partnered with Data Science to develop a business-performance prediction model enabling proactive planning and course corrections.',
			'Integrated vendor onboarding workflows into Salesforce, reducing onboarding time by 10 days and increasing vendor revenue by $400K per vendor.',
		],
		logo: logos.find((l) => l.name === 'beyond'),
	},
	{
		company: 'Real Media SLC',
		role: 'General Manager - Product',
		dates: '2017 – 2022',
		bullets: [
			'Built a proprietary analytics tool on Google + internal APIs to measure traditional media effectiveness, increasing digital revenue by 4%.',
			'Applied Movable Ink personalization for sports/retail clients, boosting jersey sales and email engagement.',
			'Managed integrated media campaigns across digital and traditional channels, optimizing mix for ROI.',
			'Delivered actionable reporting and insights to guide client budget allocation and growth.',
		],
		logo: logos.find((l) => l.name === 'realMedia'),
	},
	{
		company: 'Real Media SLC',
		role: 'Product Manager',
		dates: '2014 – 2017',
		bullets: [
			'Managed email, social, and digital ad campaigns with measurable improvements in engagement and conversions.',
			'Analyzed performance data and presented optimizations that improved CPA and ROAS across accounts.',
			'Drove internal adoption of new martech tools and workflows to increase execution speed and quality.',
			'Coordinated with creative and dev teams to deliver cross-channel campaigns on deadline.',
		],
		logo: logos.find((l) => l.name === 'realMedia'),
	},
	{
		company: 'Real Salt Lake',
		role: 'Digital Content Manager',
		dates: '2013 – 2014',
		bullets: [
			'Served as the public voice for Real Salt Lake on social media, fostering online fan communities and providing behind-the-scenes access to the RSL lifestyle.',
			'Grew the club’s digital presence to 2nd in MLS rankings despite being the league’s second smallest market.',
			'Planned weekly creative and advertising budgets to fill a 20,000-seat stadium, contributing to the longest sold-out streak in club history.',
			'Managed and updated RSL and partner websites to ensure accurate, engaging, and timely content.',
			'Rebuilt the ESPN affiliate website (ESPN700Sports.com), improving usability and content delivery for local sports coverage.',
		],
		logo: logos.find((l) => l.name === 'rsl'), // Add to logos.ts
	},
	{
		company: 'JetBlue Airways',
		role: 'Bi-lingual Reservations Crew Member',
		dates: '2010 – 2012',
		bullets: [
			'Handled 200+ inbound customer calls weekly, creating, modifying, and directing flight reservations with speed and accuracy.',
			'Achieved the highest call-to-work time efficiency on the team, demonstrating exceptional productivity in resolving customer needs.',
			'Provided accurate domestic and international travel information to ensure a seamless booking experience.',
			'Resolved a wide range of customer inquiries independently, balancing efficiency with high service quality.',
		],
		logo: logos.find((l) => l.name === 'jetblue'), // Add to logos.ts
	},
];
