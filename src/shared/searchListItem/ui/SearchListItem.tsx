import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchListItemProps } from 'shared/searchListItem/lib/searchListItemProps';

import style from './searchListItem.module.scss';

export const SearchListItem = ({ id, name }: SearchListItemProps) => {
  return (
    <ListItem disablePadding>
      <Link to={`/personal/${id}`} className={style.link}>
        <ListItemButton className={style.listItemButton}>
          <ListItemText className={style.listItemText} primary={name} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};
