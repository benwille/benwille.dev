// src/sections/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { heroPortrait, heroLogos } from '../content/hero';
import ImageFrame from "../components/ImageFrame";
import DownloadResumeButton from '../components/DownloadResumeButton';

export default function Hero() {

  return (
		<section
			id='hero'
			className='relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50'
		>
			<div className='mx-auto max-w-6xl px-4 py-12 sm:py-16 grid grid-cols-1 items-center gap-10 md:grid-cols-2'>
				{/* Image first on mobile; smaller width */}
				<div className='order-1 md:order-2'>
					<ImageFrame image={heroPortrait} />
				</div>

				<div className='order-2 md:order-1 md:pl-4 lg:pl-16'>
					<motion.h1
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-3xl font-semibold tracking-tight sm:text-4xl'
					>
						Building products that drive measurable impact
					</motion.h1>

					<p className='mt-3 max-w-xl text-zinc-600'>
						Senior PM focused on day‑of‑travel experience, lifecycle
						personalization, and ops efficiency. I bring clarity to
						complex problems, partner deeply with cross‑functional
						teams, and ship outcomes.
					</p>

					<div className='mt-6 flex flex-wrap gap-3'>
						<a
							href='#projects'
							className='btn inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium
             text-white hover:bg-emerald-700 hover:text-white
             focus:outline-none focus:ring-2 focus:ring-emerald-500'
						>
							View projects
						</a>
						<DownloadResumeButton variant='secondary' />
					</div>

					<div className='mt-8 flex flex-wrap items-center gap-3 opacity-80 justify-center sm:justify-start'>
						{heroLogos.map((logo) => (
							<img
								key={logo.name}
								src={logo.src}
								alt={logo.alt}
								width={logo.width}
								height={logo.height}
								className='h-auto opacity-80 hover:opacity-100 transition'
								loading='lazy'
							/>
						))}
						
					</div>
				</div>
			</div>
		</section>
  );
}
