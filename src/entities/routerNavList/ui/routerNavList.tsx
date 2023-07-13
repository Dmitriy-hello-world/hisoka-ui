import { Box } from '@mui/material';

import style from './routerNavList.module.scss';
import { RouterButtonItem } from 'shared/routerButtonItem';
import { pagesForNav } from 'app/config/config';
import { RouterNavListProps } from 'entities/routerNavList/lib/routerNavListProps';

export const RouterNavList = ({ handleOnClick }: RouterNavListProps) => {
  return (
    <Box className={style.navListWrapper}>
      {pagesForNav.map((page, index) => {
        return (
          <RouterButtonItem
            handleOnClick={handleOnClick}
            key={index}
            link={page.link}
            name={page.name}
            type="desktop"
          />
        );
      })}
    </Box>
  );
};
