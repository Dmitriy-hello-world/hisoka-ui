import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ButtonWithLinkProps } from 'shared/buttonWithLink/lib/types';
import style from './buttonWithLink.module.scss';

export const ButtonWithLink = ({ link, text, icon }: ButtonWithLinkProps) => {
  return (
    <Link className={style.link} to={link}>
      <Button variant="contained" className={style.button} endIcon={icon}>
        {text}
      </Button>
    </Link>
  );
};
