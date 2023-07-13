import { NavLink } from 'react-router-dom';
import { RouterButtonItemTypes } from 'shared/routerButtonItem/lib/routerButtonTypes';

import style from './routerButtonItem.module.scss';
export const RouterButtonItem = ({
  handleOnClick,
  name,
  link,
  type,
}: RouterButtonItemTypes) => {
  return (
    <NavLink
      onClick={handleOnClick}
      className={({ isActive }) => {
        if (type === 'desktop') {
          return isActive ? style.navLink_active : style.navLink;
        } else {
          return isActive ? style.navLink__mob_active : style.navLink__mob;
        }
      }}
      to={link}
    >
      {name}
    </NavLink>
  );
};
