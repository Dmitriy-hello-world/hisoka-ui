import { FormSelect } from 'entities/formSelect';
import { FormInput, registrationFormInputs } from 'entities/formInput';
import {
  confirmPasswordRule,
  emailRules,
  nameRule,
  passwordRule,
  secondNameRule,
} from 'features/registrationForm/consts/fieldRules';
import { useForm } from 'react-hook-form';
import { DualButtons } from 'entities/dualButtons';
import { onSubmitFunction } from 'features/registrationForm/lib/onSubmitHelper';
import { useGetCreateUserFun } from 'features/registrationForm/model/requests';
import style from './registrationForm.module.scss';
import { RegistrationFormProps } from 'features/registrationForm/lib/registrationFormProps';

export const RegistrationForm = ({ closeModal }: RegistrationFormProps) => {
  const { mutate: handleCreateUser, isLoading } =
    useGetCreateUserFun(closeModal);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<registrationFormInputs>();

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit((data) => {
        onSubmitFunction(data, handleCreateUser);
      })}
    >
      <FormInput
        errorName="name"
        errors={errors}
        register={register}
        title="Name"
        rules={nameRule}
        inputType="text"
      />
      <FormInput
        errorName="secondName"
        errors={errors}
        register={register}
        title="Second Name"
        rules={secondNameRule}
        inputType="text"
      />
      <FormInput
        errorName="email"
        errors={errors}
        register={register}
        title="Email"
        rules={emailRules}
        inputType="email"
      />
      <FormInput
        errorName="password"
        errors={errors}
        register={register}
        title="Password"
        rules={passwordRule}
        inputType="password"
      />
      <FormInput
        errorName="confirmPassword"
        errors={errors}
        register={register}
        title="Confirm Password"
        rules={confirmPasswordRule(watch)}
        inputType="password"
      />
      <FormSelect errorName="select" register={register} />
      <DualButtons
        isLoading={isLoading}
        nameFirstButton="reset"
        nameSecondButton="registration"
        handleOnClickFirst={() => reset()}
      />
    </form>
  );
};
