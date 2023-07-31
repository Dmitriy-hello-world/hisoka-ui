import { AppBar, Container, Toolbar } from '@mui/material';
import { HeaderMobile } from 'features/headerMobile';
import { HeaderDesktop } from 'features/headerDesktop';
import { Search } from 'features/search';
import { PersonalMenu } from 'features/personalMenu';
import { useAtom } from 'jotai';
import { handleOpenModal } from 'widgets/modal';

export const Header = () => {
  const [_, setOpenModal] = useAtom(handleOpenModal);

  return (
    <AppBar position="relative">
      <Container>
        <Toolbar disableGutters>
          <HeaderDesktop />
          <HeaderMobile />
          <Search isAuthorized={true} />
          <PersonalMenu handleOpenModal={setOpenModal} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
