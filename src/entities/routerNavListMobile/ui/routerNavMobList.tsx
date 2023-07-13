import { MenuItem, Typography } from '@mui/material';

import { RouterButtonItem } from 'shared/routerButtonItem';
import { pagesForNav } from 'app/config/config';
import { RouterNavListProps } from 'entities/routerNavList/lib/routerNavListProps';

export const RouterNavMobList = ({ handleOnClick }: RouterNavListProps) => {
  return (
    <>
      {pagesForNav.map((page, index) => {
        return (
          <MenuItem key={index} onClick={handleOnClick}>
            <Typography textAlign="center">
              <RouterButtonItem
                handleOnClick={handleOnClick}
                key={index}
                link={page.link}
                name={page.name}
                type="mobile"
              />
            </Typography>
          </MenuItem>
        );
      })}
    </>
  );
};
