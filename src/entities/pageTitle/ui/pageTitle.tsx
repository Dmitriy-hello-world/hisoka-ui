import { Typography } from '@mui/material';
import { PageTitleProps } from 'entities/pageTitle/lib/types';
import { useAtom } from 'jotai';
import { handleOpenModal } from 'widgets/modal';
import style from './pageTitle.module.scss';

export const PageTitle = ({ text, isAuthorizated }: PageTitleProps) => {
  const [, openModal] = useAtom(handleOpenModal);
  console.log(isAuthorizated);
  return (
    <>
      {isAuthorizated ? (
        <Typography className={style.text} variant="h2" gutterBottom>
          {text}
        </Typography>
      ) : (
        <Typography className={style.text} variant="h2" gutterBottom>
          Sorry, at first you need to{' '}
          <span className={style.logIn} onClick={() => openModal('log')}>
            log in!
          </span>
        </Typography>
      )}
    </>
  );
};
