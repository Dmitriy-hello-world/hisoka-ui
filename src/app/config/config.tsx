import {
  HomePage,
  NoFoundPage,
  AboutPage,
  StudyPage,
} from 'app/router/lib/lazyPages';

export const pagesConfiguration = [
  {
    name: 'Home',
    link: '/',
    componentItem: HomePage,
  },
  {
    name: 'Study',
    link: '/study',
    componentItem: StudyPage,
  },
  {
    name: 'About Us',
    link: '/about',
    componentItem: AboutPage,
  },
  {
    name: 'Not Found Page',
    link: '*',
    componentItem: NoFoundPage,
  },
];

export const pagesForNav = pagesConfiguration.filter(
  (page) => page.name !== 'Not Found Page'
);
