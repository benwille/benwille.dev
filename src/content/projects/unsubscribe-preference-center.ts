// src/content/projects/unsubscribe-preference-center.ts
import type { Project } from '../types';

const project: Project = {
  slug: 'unsubscribe-preference-center',
  title: 'Stopped the Bleed: Preference Center + Root-Cause Insights',
  summary:
    'Shipped a rapid unsubscribe study (100k responses in 7 days) and a new preference center that cut unsubscribes by 80%.',
  metric: '−80% unsubscribes',
  tags: ['Retention', 'Personalization', 'Email'],
  date: '2024-01-19',
  featured: true,
  cover: {
    src: '/assets/projects/unsubscribe-preference-center-cover.png',
    alt: 'Preference center flow and response analysis dashboard',
    width: 1600,
    height: 900,
  },
  body: {
    intro:
      'Unsubscribe rates surged. I led a fast discovery loop (in-email survey + log analysis), then shipped a preference center with topic and frequency controls.',
    outcomes: [
      'Captured 100k+ responses in 7 days; identified the top drop drivers.',
      'Reduced unsubscribes by 80% post-launch.',
      'Established guardrails for frequency, spam, and deliverability.',
    ],
    decisions: [
      'Chose in-email single-click survey for scale and speed.',
      'Prioritized “opt-down” pathways over hard saves to protect trust.',
      'Added rate-limit and recency checks to prevent fatigue.',
    ],
    notes:
      'Next: multi-channel preferences (push/SMS) and predictive fatigue scoring.',
  },
  links: { caseStudy: '', repo: '' },
};

export default project;
