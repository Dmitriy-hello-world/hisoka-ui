import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

import ErrorImg from 'app/assets/error.gif';

import style from './noFoundPage.module.scss';

const NoFoundPage = () => {
  return (
    <Container>
      <div className={style.wrapper}>
        <img className={style.img} src={ErrorImg} alt="Error" />
        <div className={style.text}>
          Page not Found! Go to{' '}
          <Link className={style.link} to="/">
            {' Home '}
          </Link>
          page
        </div>
      </div>
    </Container>
  );
};

export default NoFoundPage;
