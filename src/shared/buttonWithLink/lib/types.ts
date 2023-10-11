import { pagesLinkValues } from 'app/config/config';

export interface ButtonWithLinkProps {
  link: pagesLinkValues;
  text: string;
  icon: React.ReactNode;
}
