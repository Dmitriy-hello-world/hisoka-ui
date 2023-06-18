import { lazy } from 'react';

export const MainPage = lazy(async () => await import('pages/mainPage'));
export const NoFoundPage = lazy(async () => await import('pages/noFoundPage'));
//export const PersonalPage = lazy(async () => await import('../pages/personalPage/personalPage'));
//export const ModulePage = lazy(async () => await import('../pages/modulePage/modulePage'));
//export const FlashCardsPage = lazy(async () => await import('../pages/flasCardsPage/flashCardsPage'));
