export interface PersonalMenuNameProps {
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleOpenModal: (type: 'reg' | 'log') => void;
  firstName: string;
  isAuthorized: boolean;
  open: boolean;
}
