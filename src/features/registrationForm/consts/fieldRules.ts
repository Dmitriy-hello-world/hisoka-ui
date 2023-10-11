import { registrationFormInputs } from 'entities/formInput';
import { UseFormWatch } from 'react-hook-form';

export const nameRule = {
  required: 'Type your Name!',
  maxLength: {
    value: 30,
    message: 'Max 30 letters!',
  },
  minLength: {
    value: 2,
    message: 'Min 2 letters!',
  },
};

export const secondNameRule = {
  required: 'Type your Surname!',
  maxLength: {
    value: 20,
    message: 'Max 30 letters!',
  },
  minLength: {
    value: 2,
    message: 'Min 2 letters!',
  },
};

export const passwordRule = {
  required: 'Type your password!',
  maxLength: {
    value: 34,
    message: 'Max 34 letters!',
  },
  pattern: {
    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*][^\s]{9,}/,
    message: 'Your password must have capital letter, number and 8+ letters',
  },
};

export const confirmPasswordRule = (
  watch: UseFormWatch<registrationFormInputs>
) => {
  return {
    required: 'Confirm your password!',
    pattern: {
      value: new RegExp(`^${watch('password')}$`),
      message: 'Your passwords must be the same',
    },
  };
};

export const emailRules = {
  required: 'Type your E-mail!',
  pattern: {
    value:
      /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/,
    message: 'invalid email format',
  },
};
