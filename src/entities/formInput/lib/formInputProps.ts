import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FormInputProps {
  register:
    | UseFormRegister<registrationFormInputs>
    | UseFormRegister<enterFormInputs>;
  errors:
    | FieldErrors<registrationFormInputs | enterFormInputs>
    | keyof enterFormInputs;
  errorName: keyof registrationFormInputs | keyof enterFormInputs;
  title: regFormTitles | enterFormTitles;
  rules: RulesType;
  inputType: 'text' | 'password' | 'email';
}

type regFormTitles =
  | 'Name'
  | 'Second Name'
  | 'Password'
  | 'Confirm Password'
  | 'Email'
  | 'Select your language';

export interface registrationFormInputs {
  name: string;
  secondName: string;
  password: string;
  confirmPassword: string;
  email: string;
  select: string;
}

type enterFormTitles = 'Password' | 'Email';

export interface enterFormInputs {
  password: string;
  email: string;
}

interface RulesType {
  [key: string]:
    | string
    | {
        [key: string]: string | number | RegExp;
      };
}
