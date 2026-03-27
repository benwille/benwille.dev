// src/components/DownloadResumeButton.tsx
import React from 'react';
import siteConfig from '../content/site.config';

type Props = {
	variant?: 'primary' | 'secondary';
	className?: string;
	/** Button text (defaults to "Download resume") */
	label?: string;
	/** Show the arrow icon? (defaults to true) */
	showArrow?: boolean;
};

export default function DownloadResumeButton({
	variant = 'secondary',
	className = '',
	label = 'Download resume',
	showArrow = true,
}: Props) {
	const base =
		'btn inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium';
	const styles =
		variant === 'primary'
			? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white'
			: 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 hover:text-zinc-900';

	return (
		<a
			href={siteConfig.resumeUrl}
			download={siteConfig.resumeFilename}
			className={`${base} ${styles} ${className}`}
			aria-label={label}
		>
			<span>{label}</span>
			{showArrow && <span aria-hidden>↓</span>}
		</a>
	);
}
