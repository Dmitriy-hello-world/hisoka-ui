import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@mui/material';
import { FormInputProps } from 'entities/formInput/lib/formInputProps';
import style from './formInput.module.scss';

export const FormInput = ({
  register,
  errors,
  title,
  errorName,
  rules,
  inputType,
}: FormInputProps) => {
  return (
    <label className={style.input}>
      {errors[errorName] ? (
        <span className={style.error}>
          <ErrorMessage errors={errors} name={errorName} />
        </span>
      ) : (
        <span>{title}:</span>
      )}
      <Input type={inputType} {...register(errorName, rules)} />
    </label>
  );
};
