// The list of case studies, in the order they appear on the homepage.
// The homepage cards and the "Next project" links are both built from this list.

import type { ImageMetadata } from 'astro';
import { path } from '../utils/paths';

import nikkoDesignSystemCover from '../assets/images/nikko-design-system/cover.jpg';
import nikkoWebsiteCover from '../assets/images/nikko-website/cover.png';
import rexAcademyCover from '../assets/images/rex-academy/cover.png';
import babyBoomCover from '../assets/images/baby-boom/cover.png';
import panDeQuesoCover from '../assets/images/pan-de-queso/cover.png';

export interface Project {
  /** Last part of the page address: /work/<slug> */
  slug: string;
  title: string;
  summary: string;
  cover: ImageMetadata;
  coverAlt: string;
}

export const projects: Project[] = [
  {
    slug: 'nikko-asset-management---design-system',
    title: 'Nikko Asset Management - Design System',
    summary:
      'Built and evolved a scalable Figma design system across six regional websites, using reusable components, Auto Layout, design tokens and documentation to improve consistency and design-to-development collaboration.',
    cover: nikkoDesignSystemCover,
    coverAlt:
      'Monitor showing the Foundations page of the Nikko AM design system in Figma, with cards for colours, grids, illustrations and icons.',
  },
  {
    slug: 'nikko-am-website-redesign',
    title: 'Nikko AM Website Redesign',
    summary:
      'End-to-end redesign of a complex global investment platform — from research and information architecture to UI and delivery. +300% engagement · +15 usability points · −86% carbon footprint',
    cover: nikkoWebsiteCover,
    coverAlt:
      'Desktop monitor on a wooden desk showing the redesigned Nikko AM homepage with the headline “Invest with purpose. Invest with Nikko AM”.',
  },
  {
    slug: 'teacher-workflow-redesign',
    title: 'Rex Academy — Teacher Workflow Redesign',
    summary:
      'How card sorting and usability testing simplified a dashboard for K-12 educators managing CS courses',
    cover: rexAcademyCover,
    coverAlt:
      'Laptop showing the redesigned Rex Academy teacher dashboard with today’s classes, a calendar and recent assignments.',
  },
  {
    slug: 'baby-boom-nsk-—-e-commerce-ux-audit-redesign',
    title: 'Baby Boom NSK — E-commerce UX Audit & Redesign',
    summary:
      'User research–driven redesign focused on improving navigation, trust, and purchase flow for a baby products store.',
    cover: babyBoomCover,
    coverAlt:
      'Laptop and phone showing the redesigned Baby Boom NSK online store, with a row of popular categories above a product grid.',
  },
  {
    slug: 'pan-de-queso',
    title: 'La Casa del Pan de Queso Menu Redesign',
    summary:
      'Bilingual print and QR-based digital menu designed for a high-traffic café under tight time and budget constraints',
    cover: panDeQuesoCover,
    coverAlt:
      'Project cover for La Casa del Pan de Queso showing the redesigned print menu beside the mobile digital menu.',
  },
];

/** Address of a case-study page, safe to use in a link. */
export function projectUrl(project: Project): string {
  return encodeURI(path(`/work/${project.slug}`));
}
