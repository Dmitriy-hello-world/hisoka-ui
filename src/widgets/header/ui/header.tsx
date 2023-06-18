import { AppBar, Container, Toolbar } from '@mui/material';

export const Header = () => {
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar disableGutters></Toolbar>
      </Container>
    </AppBar>
  );
};
