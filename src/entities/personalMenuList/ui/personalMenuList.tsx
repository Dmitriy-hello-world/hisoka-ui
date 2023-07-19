import { Menu } from '@mui/material';
import { PersonalMenuInner } from 'entities/personalMenuInner';
import { PersonalMenuListProps } from 'entities/personalMenuList/lib/personalMenuListTypes';

import style from './personalMenuList.module.scss';

export const PersonalMenuList = ({
  anchorEl,
  firstName,
  secondName,
  isAuthorized,
  handleClose,
  handleOpenModal,
  open,
}: PersonalMenuListProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
      }}
      className={style.menu}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <PersonalMenuInner
        firstName={firstName}
        secondName={secondName}
        isAuthorized={isAuthorized}
        handleClickOpen={(type: 'log' | 'reg') => handleOpenModal(type)}
      />
    </Menu>
  );
};
