import { CssBaseline } from '@mui/material';
import RootRouter from 'app/router/rootRouter';
import { CustomSnackbar } from 'features/customSnackBar';
import { CustomModal } from 'widgets/modal';

const App = () => {
  return (
    <>
      <CssBaseline />
      <RootRouter />
      <CustomModal />
      <CustomSnackbar />
    </>
  );
};

export default App;
