import React, {useMemo} from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";
import {Link} from "react-router-dom";
import DownloadResumeButton from '../components/DownloadResumeButton';
import siteConfig from '../content/site.config';
import { useLastModified } from '../hooks/useLastModified';
import { formatMonthYear } from '../utils/format';

export default function Contact() {
  const lastMod = useLastModified(siteConfig.resumeUrl);

  const updatedLabel = useMemo(() => {
		if (lastMod) return formatMonthYear(lastMod);
		if (siteConfig.resumeUpdatedFallback)
			return formatMonthYear(new Date(siteConfig.resumeUpdatedFallback));
		return null;
  }, [lastMod]);

  return (
		<Section
			id='contact'
			title='Contact'
			subtitle='Quick reach‑out for recruiters & hiring managers.'
			bg='bg-zinc-50'
		>
			<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
				<Card>
					<ContactForm />
				</Card>
				<Card>
					<div className='text-sm'>
						<div className='font-semibold'>Direct</div>
						<div className='mt-1 text-zinc-600'>
							Email: ben.wille@gmail.com
						</div>
						<div className='text-zinc-600'>
							LinkedIn: linkedin.com/in/benwille
						</div>
						<div className='mt-4 font-semibold'>Resume</div>
						<div className='text-zinc-600'>
							Updated {updatedLabel} · PDF
						</div>

						<DownloadResumeButton
							variant='secondary'
							label='Download'
							showArrow={false}
							className='mt-3'
						/>
					</div>
				</Card>
				<Card>
					<div className='text-sm'>
						<div className='font-semibold'>Availability</div>
						<p className='mt-1 text-zinc-600'>
							Open to product roles in product‑led organizations;
							startup‑friendly.
						</p>
						<div className='mt-3'>
							<a
								href='https://outlook.office.com/bookwithme/user/d95ae5b4a86f4a5eadea7fdd316bb13d@flybreeze.com/meetingtype/Y0bVrkhuHE2VhdcKyHyBKw2?anonymous&ismsaljsauthenabled&ep=mlink'
								target='_blank'
								className='btn rounded-xl bg-amber-500/90 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500'
							>
								Schedule a call
							</a>
						</div>
					</div>
				</Card>
			</div>
		</Section>
  );
}
