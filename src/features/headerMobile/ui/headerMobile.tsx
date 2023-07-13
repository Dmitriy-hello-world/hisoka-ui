import { Logo } from 'entities/logo';
import { Burger } from 'entities/burger';
import { MobileBurgerMenu } from 'entities/mobileBurgerMenu';
import { useMenuNavigate } from 'features/headerMobile/lib/menuNavigateFunctions';

import style from './headerMobile.module.scss';

export const HeaderMobile = () => {
  const { anchorElNav, handleOpenNavMenu, handleCloseNavMenu } =
    useMenuNavigate();

  return (
    <>
      <Logo type="mobile" />
      <div className={style.wrapper}>
        <Burger handleOnClick={handleOpenNavMenu} />
        <MobileBurgerMenu
          anchorElNav={anchorElNav}
          handleCloseNavMenu={handleCloseNavMenu}
        />
      </div>
    </>
  );
};
