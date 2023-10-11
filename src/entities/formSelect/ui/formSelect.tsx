import { MenuItem, Select } from '@mui/material';
import { FormInputProps } from 'entities/formInput';
import { useState } from 'react';

import { languages } from '../consts/languages';
import style from './formSelect.module.scss';

export const FormSelect = ({
  register,
  errorName,
}: Pick<FormInputProps, 'register' | 'errorName'>) => {
  const [value, setValue] = useState('en');
  const { onChange, onBlur, name, ref } = register(errorName);

  return (
    <label>
      <div>Language:</div>
      <Select
        className={style.select}
        fullWidth={true}
        onChange={(e) => {
          onChange(e);
          setValue(e.target.value);
        }}
        name={name}
        ref={ref}
        onBlur={onBlur}
        id="demo-multiple-name"
        value={value}
        variant="standard"
      >
        {Object.entries(languages).map((lang, i) => {
          return (
            <MenuItem key={i} value={lang[0]}>
              {lang[1]}
            </MenuItem>
          );
        })}
      </Select>
    </label>
  );
};
