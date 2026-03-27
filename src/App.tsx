import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import DesignSystem from './sections/DesignSystem';
import Highlights from './sections/Highlights';
import Experience from './sections/Experience';
import Projects from './sections/ProjectsHome';
import Testimonials from './sections/Testimonials';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import Seo from './components/Seo';

export default function App() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900'>
			<style>{`html{scroll-behavior:smooth}`}</style>
			<Seo
				title='Ben Wille – Product Manager'
				description='Senior Product Manager specializing in personalization programs, platform workflows, and product strategy. Explore highlights, projects, and resume.'
				image='https://benwille.dev/assets/images/E2B669C1-B35D-405E-B281-48CF2BA5ADF8.JPG'
				url='https://benwille.dev/'
			/>
			<Header />
			<Hero />
			{/* <DesignSystem /> */}
			<Highlights />
			<Experience />
			<Projects />
			<Testimonials />
			<Skills />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}
