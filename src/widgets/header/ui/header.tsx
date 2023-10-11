import { AppBar, Container, Toolbar } from '@mui/material';
import { HeaderMobile } from 'features/headerMobile';
import { HeaderDesktop } from 'features/headerDesktop';
import { Search } from 'features/search';
import { PersonalMenu } from 'features/personalMenu';
import { useAtom } from 'jotai';
import { handleOpenModal } from 'widgets/modal';
import { useGetUserFun } from 'widgets/header/model/model';
import { handleCloseModal } from 'widgets/modal';
import { getToken } from 'app/tanstackQuery/token';

export const Header = () => {
  const [, setOpenModal] = useAtom(handleOpenModal);
  const [, closeModal] = useAtom(handleCloseModal);
  const { data: user } = useGetUserFun(closeModal);
  const token = getToken();

  return (
    <AppBar position="relative">
      <Container>
        <Toolbar disableGutters>
          <HeaderDesktop />
          <HeaderMobile />
          <Search isAuthorized={token} />
          <PersonalMenu
            token={token}
            user={user?.data}
            handleOpenModal={setOpenModal}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
