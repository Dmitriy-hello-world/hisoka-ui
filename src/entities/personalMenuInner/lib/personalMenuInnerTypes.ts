export interface PersonalMenuInnerProps {
  isAuthorized: boolean;
  firstName: string;
  secondName: string;
  handleClickOpen: (type: 'log' | 'reg') => void;
}
