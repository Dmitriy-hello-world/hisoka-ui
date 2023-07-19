import { Avatar, ListItemIcon, MenuItem } from '@mui/material';
import { PersonalMenuListItemProps } from 'shared/personalMenuListItem/lib/personalMenuListItemTypes';

import style from './personalMenuListItem.module.scss';

export const PersonalMenuListItem = ({
  text,
  handleClick,
  Icon,
  isAvatar,
}: PersonalMenuListItemProps) => {
  return (
    <MenuItem className={style.item} onClick={handleClick}>
      {isAvatar ? <Avatar className={style.avatar} /> : null}
      {Icon ? (
        <ListItemIcon>
          <Icon fontSize="small" />
        </ListItemIcon>
      ) : null}
      {text}
    </MenuItem>
  );
};
