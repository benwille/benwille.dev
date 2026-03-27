// src/components/ImageFrame.tsx
import React from 'react';
import type { ImageRef } from '../content/types';

type Props = {
	image: ImageRef; // { src, alt, width?, height? }
	label?: string; // optional overlay text
	className?: string; // optional extra classes
	aspect?: string; // Tailwind aspect ratio (default 4:5)
};

export default function ImageFrame({
	image,
	label,
	className = '',
	aspect = 'aspect-[4/5]',
}: Props) {
	return (
		<div
			className={`relative mx-auto w-56 overflow-hidden rounded-3xl shadow-lg sm:w-64 md:w-72 ${className}`}
		>
			<img
				src={image.src}
				alt={image.alt}
				width={image.width}
				height={image.height}
				className={`${aspect} w-full object-cover`}
				loading='lazy'
			/>
			<div className='absolute inset-0 mix-blend-multiply filter grayscale-[35%] saturate-[95%] brightness-[102%]' />
			<div className='absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-300/20 via-transparent to-emerald-700/10' />
			{label && (
				<div className='absolute inset-0 pointer-events-none flex items-center justify-center text-xs text-white/80'>
					{label}
				</div>
			)}
		</div>
	);
}
