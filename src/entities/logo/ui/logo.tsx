import { Link } from 'react-router-dom';
import StyleIcon from '@mui/icons-material/Style';

import style from './logo.module.scss';
import { logoProps } from 'entities/logo/lib/logoTypes';

export const Logo = ({ type }: logoProps) => {
  return (
    <Link
      className={type === 'desktop' ? style.logo : style.logo__mobile}
      to="/"
    >
      <StyleIcon className={style.img} />
      <span className={type === 'desktop' ? style.text : style.text__mobile}>
        Hisoka
      </span>
    </Link>
  );
};
