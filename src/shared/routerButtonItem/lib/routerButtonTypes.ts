export interface RouterButtonItemTypes {
  handleOnClick: () => void;
  name: string;
  link: string;
  type: 'desktop' | 'mobile';
}
