import { FormInput, enterFormInputs } from 'entities/formInput';
import { emailRules, passwordRule } from 'features/enterForm/consts/fieldRules';
import { useForm } from 'react-hook-form';
import { DualButtons } from 'entities/dualButtons';
import style from './enterForm.module.scss';
import { useStartSessionFun } from 'features/enterForm/model/requests';

export const EnterForm = () => {
  const { mutate: handleStartSession, isLoading } = useStartSessionFun();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<enterFormInputs>();

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit((data) => {
        handleStartSession({ data });
      })}
    >
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
      <DualButtons
        isLoading={isLoading}
        nameFirstButton="reset"
        nameSecondButton="Log In"
        handleOnClickFirst={() => reset()}
      />
    </form>
  );
};
