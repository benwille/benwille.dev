import React from "react";

export default function Footer() {

  return (
		<footer className='border-t border-zinc-200 bg-white'>
			<div className='mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-8 text-xs text-zinc-500 md:grid-cols-3 md:items-center'>
				<div>© {new Date().getFullYear()} Ben Wille</div>
				<div className='flex flex-wrap items-center gap-4 md:justify-center text-zinc-700'>
					<a
						href='#highlights'
						className='transition-colors hover:text-emerald-600'
					>
						Highlights
					</a>
					<a
						href='#projects'
						className='transition-colors hover:text-emerald-600'
					>
						Projects
					</a>
					<a
						href='#contact'
						className='transition-colors hover:text-emerald-600'
					>
						Contact
					</a>
				</div>
				<div className='md:text-right'>
					Built with AI — React + Tailwind
				</div>
			</div>
		</footer>
  );
}
