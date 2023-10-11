import { UseMutateFunction } from '@tanstack/react-query';
import { registrationFormInputs } from 'entities/formInput';
import { CreateUserBody } from 'features/registrationForm/lib/requestsTypes';

export const onSubmitFunction = (
  data: registrationFormInputs,
  handleCreateUser: UseMutateFunction<unknown, unknown, CreateUserBody, unknown>
) => {
  handleCreateUser({
    email: data.email,
    firstName: data.name,
    secondName: data.secondName,
    avatar: '',
    lang: data.select,
    password: data.password,
    confirmPassword: data.confirmPassword,
  });
};
