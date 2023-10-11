import { Box, Container, Typography } from '@mui/material';
import { ButtonWithLink } from 'shared/buttonWithLink';
import SendIcon from '@mui/icons-material/Send';
import style from './homePage.module.scss';
import homePage from 'app/assets/Startup_SVG.svg';

const HomePage = () => {
  return (
    <Container className={style.wrapper}>
      <Box className={style.inner}>
        <Typography className={style.header} variant="h1" gutterBottom>
          Hisokacards
        </Typography>
        <Typography variant="h4" className={style.subTitle} gutterBottom>
          What does it mean?
        </Typography>
        <Typography className={style.text} variant="body2" gutterBottom>
          Hisokacards is where you can upgrade your language skills for free.
          Yeah! You got it right, absolutely free service to study new words
          with a flashcard system and fun games. Want more? Welcome to
          Hisokacards!
        </Typography>
        <ButtonWithLink link="/study" text="Get Started" icon={<SendIcon />} />
      </Box>
      <img src={homePage} alt="Promo" className={style.img} />
    </Container>
  );
};

export default HomePage;
