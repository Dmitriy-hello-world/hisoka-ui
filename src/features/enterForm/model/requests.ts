import ky from 'ky';
import * as api from 'app/config/requests';
import { useAtom } from 'jotai';
import { handleOpenSnackBar } from 'features/customSnackBar';
import {
  StartSessionBody,
  StartSessionResponse,
} from 'features/enterForm/lib/requestType';
import { useMutation } from '@tanstack/react-query';
import { client } from 'app/tanstackQuery/tanstackQuery';
import { deleteToken, setToken } from 'app/tanstackQuery/token';

const startSession = async (body: StartSessionBody) => {
  try {
    const data: StartSessionResponse = await ky
      .post(api.START_SESSION, { json: body })
      .json();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error('Ops.. Something went wrong');
    }
  }
};

export const useStartSessionFun = () => {
  const [_, openSnackBar] = useAtom(handleOpenSnackBar);

  return useMutation({
    mutationFn: (body: StartSessionBody) => startSession(body),
    onSuccess: (data) => {
      if (data?.status === 1 && typeof data?.data?.jwt === 'string') {
        setToken(data.data.jwt);
        client.invalidateQueries({
          queryKey: ['user'],
        });
      } else if (data?.error?.code === 'AUTHENTICATION_FAILED') {
        throw new Error('User does not exist');
      } else {
        throw new Error('Ops.. Something went wrong');
      }
    },
    onError: (error) => {
      deleteToken();
      if (error instanceof Error) {
        openSnackBar({
          type: 'error',
          message: error.message,
        });
      }
    },
  });
};
