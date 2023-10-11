export interface personalMenuProps {
  handleOpenModal: (type: 'log' | 'reg') => void;
  user:
    | {
        id: string;
        email: string;
        firstName: string;
        secondName: string;
        lang: string;
        avatarUrl: string;
        createdAt: string;
        updatedAt: string;
      }
    | undefined;
  token: string | null;
}
