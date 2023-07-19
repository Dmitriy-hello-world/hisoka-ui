import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import { PersonalMenuNameProps } from 'entities/personalMenuName/lib/personalMenuNameTypes';

import style from './personalMenuName.module.scss';

export const PersonalMenuName = ({
  firstName,
  handleClick,
  isAuthorized,
  open,
  handleOpenModal,
}: PersonalMenuNameProps) => {
  return (
    <>
      <Box className={style.menu_name_wrapper}>
        {firstName && isAuthorized ? (
          <Typography sx={{ m: '0 5px' }} className={style.name}>
            {firstName}
          </Typography>
        ) : (
          <Typography
            onClick={() => handleOpenModal('log')}
            className={style.log_in}
          >
            Log In
          </Typography>
        )}
        <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            className={style.icon}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar className={style.avatar_size}>
              {firstName && isAuthorized ? firstName[0] : 'L'}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};
