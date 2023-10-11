import { Divider } from '@mui/material';
import { Logo } from 'entities/logo';
import { RouterNavList } from 'entities/routerNavList';

import style from './headerDesktop.module.scss';

export const HeaderDesktop = () => {
  return (
    <>
      <Logo />
      <Divider
        sx={{ m: '0 1rem 0 0.5rem' }}
        className={style.divider}
        orientation="vertical"
        flexItem
      />
      <RouterNavList handleOnClick={() => console.log(1)} />
    </>
  );
};
