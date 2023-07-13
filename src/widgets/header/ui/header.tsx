import { AppBar, Container, Toolbar } from '@mui/material';
import { HeaderMobile } from 'features/headerMobile';
import { HeaderDesktop } from 'features/headerDesktop';

export const Header = () => {
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar disableGutters>
          <HeaderDesktop />
          <HeaderMobile />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
