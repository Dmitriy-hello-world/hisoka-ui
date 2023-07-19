import { AppBar, Container, Toolbar } from '@mui/material';
import { HeaderMobile } from 'features/headerMobile';
import { HeaderDesktop } from 'features/headerDesktop';
import { Search } from 'features/search';
import { PersonalMenu } from 'features/personalMenu';

export const Header = () => {
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar disableGutters>
          <HeaderDesktop />
          <HeaderMobile />
          <Search isAuthorized={true} />
          <PersonalMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
