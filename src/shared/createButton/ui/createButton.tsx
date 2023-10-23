import { Box, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { CreateButtonProps } from 'shared/createButton/lib/types';
import style from './createButton.module.scss';

export const CreateButton = ({ text, isLoading }: CreateButtonProps) => {
  if (isLoading) {
    return (
      <Box className={style.spinner}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Button className={style.button} variant="contained">
      {text}
    </Button>
  );
};
