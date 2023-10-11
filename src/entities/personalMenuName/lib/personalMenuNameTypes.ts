export interface PersonalMenuNameProps {
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleOpenModal: (type: 'reg' | 'log') => void;
  firstName: string | undefined;
  isAuthorized: boolean;
  open: boolean;
}
