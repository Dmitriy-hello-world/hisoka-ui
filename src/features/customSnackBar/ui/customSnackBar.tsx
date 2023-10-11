import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';
import { useAtom } from 'jotai';
import {
  isSnackBarOpenBase,
  handleOpenSnackBar,
  handleCloseSnackBar,
} from 'features/customSnackBar/model/snackBar';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomSnackbar = () => {
  const [isOpen] = useAtom(isSnackBarOpenBase);
  const [{ type, message }] = useAtom(handleOpenSnackBar);
  const [_, handleClose] = useAtom(handleCloseSnackBar);

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button
        variant="outlined"
        onClick={() =>
          handleClick({ type: 'error', message: 'all is not fine now' })
        }
      >
        Open success snackbar
      </Button> */}
      <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
