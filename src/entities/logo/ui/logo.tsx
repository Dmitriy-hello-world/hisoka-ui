import { Link } from 'react-router-dom';
import StyleIcon from '@mui/icons-material/Style';

import style from './logo.module.scss';

export const Logo = () => {
  return (
    <Link className={style.logo} to="/">
      <StyleIcon className={style.img} />
      <span className={style.text}>Hisoka</span>
    </Link>
  );
};
