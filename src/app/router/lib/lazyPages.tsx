import { lazy } from 'react';

export const HomePage = lazy(async () => await import('pages/homePage'));
export const NoFoundPage = lazy(async () => await import('pages/noFoundPage'));
export const AboutPage = lazy(async () => await import('pages/aboutPage'));
export const StudyPage = lazy(async () => await import('pages/studyPage'));
