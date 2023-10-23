import { Stack, TextField } from '@mui/material';
import { DualInputsProps } from 'entities/dualInputs/lib/types';
import style from './dualInputs.module.scss';

export const DualInputs = ({
  firstName,
  firstValue,
  firstHandleOnChange,
  secondName,
  secondValue,
  secondHandleOnChange,
}: DualInputsProps) => {
  return (
    <Stack className={style.stack}>
      <TextField
        className={style.input}
        id="standard-multiline-flexible"
        label={firstName}
        variant="standard"
        value={firstValue}
        onChange={(e) => firstHandleOnChange(e.target.value)}
      />
      <TextField
        className={style.input}
        id="standard-multiline-flexible"
        label={secondName}
        variant="standard"
        value={secondValue}
        onChange={(e) => secondHandleOnChange(e.target.value)}
      />
    </Stack>
  );
};
