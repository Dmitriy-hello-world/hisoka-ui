import { Button } from '@mui/material';
import { DualButtonsProps } from 'entities/dualButtons/lib/dualButtonsTypes';
import SendIcon from '@mui/icons-material/Send';
import { CircularProgress } from '@mui/material';
import style from './dualButtons.module.scss';

export const DualButtons = ({
  handleOnClickFirst,
  handleOnClickSecond,
  nameFirstButton,
  nameSecondButton,
  isLoading,
}: DualButtonsProps) => {
  const Icon = isLoading ? (
    <CircularProgress color="inherit" size={20} />
  ) : (
    <SendIcon />
  );

  return (
    <div className={style.wrapper}>
      <Button variant="outlined" onClick={handleOnClickFirst}>
        {nameFirstButton}
      </Button>
      <Button
        type="submit"
        variant="contained"
        endIcon={Icon}
        onClick={handleOnClickSecond}
      >
        {nameSecondButton}
      </Button>
    </div>
  );
};
