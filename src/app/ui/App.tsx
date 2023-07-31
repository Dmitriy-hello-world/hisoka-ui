import { CssBaseline } from '@mui/material';
import RootRouter from 'app/router/rootRouter';
import { CustomModal } from 'widgets/modal';

const App = () => {
  return (
    <>
      <CssBaseline />
      <RootRouter />
      <CustomModal />
    </>
  );
};

export default App;
