import ky from 'ky';
import * as api from 'app/config/requests';
import {
  CreateUserBody,
  CreateUserResponse,
} from 'features/registrationForm/lib/requestsTypes';
import { useMutation } from '@tanstack/react-query';
import { handleOpenSnackBar } from 'features/customSnackBar';
import { useAtom } from 'jotai';

export const useGetCreateUserFun = (closeModal: () => void) => {
  const [_, openSnackBar] = useAtom(handleOpenSnackBar);

  const createUser = async (body: CreateUserBody) => {
    try {
      const data: CreateUserResponse = await ky
        .post(api.CREATE_USER, { json: body })
        .json();

      return data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error('Ops.. Something went wrong');
      }
    }
  };

  return useMutation({
    mutationFn: (data: CreateUserBody) => createUser(data),
    onSuccess: (data) => {
      if (data?.error?.code === 'NOT_UNIQUE') {
        throw new Error('User with this email already exists');
      }
      closeModal();
      openSnackBar({
        type: 'success',
        message: 'User Created! Please Log In!',
      });
    },
    onError: (error) => {
      if (error instanceof Error) {
        openSnackBar({
          type: 'error',
          message: error.message,
        });
      }
    },
  });
};
