export interface PersonalMenuListProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  firstName: string;
  secondName: string;
  isAuthorized: boolean;
  handleClose: () => void;
  handleOpenModal: (type: 'log' | 'reg') => void;
}
