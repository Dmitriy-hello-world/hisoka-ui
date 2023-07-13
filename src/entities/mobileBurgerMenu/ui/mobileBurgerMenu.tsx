import { Menu } from '@mui/material';
import { mobileBurgerMenuProps } from 'entities/mobileBurgerMenu/lib/mobileBurgerMenuTypes';
import { RouterNavMobList } from 'entities/routerNavListMobile';

import style from './mobileBurgerMenu.module.scss';

export const MobileBurgerMenu = ({
  anchorElNav,
  handleCloseNavMenu,
}: mobileBurgerMenuProps) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      className={style.menu}
    >
      <RouterNavMobList handleOnClick={handleCloseNavMenu} />
    </Menu>
  );
};
