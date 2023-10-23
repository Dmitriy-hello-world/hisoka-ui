import ky from 'ky';
import * as api from 'app/config/requests';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { handleOpenSnackBar } from 'features/customSnackBar';
import { deleteToken, getToken } from 'app/tanstackQuery/token';
import { userResponse } from 'widgets/header/lib/lib';
import { useState } from 'react';

const getUser = async (token: string) => {
  try {
    console.log('here we are');
    const data: userResponse = await ky
      .get(api.GET_USER_INFO, {
        headers: {
          Authorization: token,
        },
      })
      .json();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error();
    }
  }
};

export const useGetUserFun = (closeModal: () => void) => {
  const [_, openSnackBar] = useAtom(handleOpenSnackBar);
  const [isFirstTime, setIsFirstTime] = useState(true);

  return useQuery({
    queryFn: () => getUser(getToken() || ''),
    queryKey: ['user'],
    staleTime: Infinity,
    onSuccess: (data) => {
      if (data?.error?.code === 'FORMAT_ERROR') {
        return;
      }
      if (isFirstTime) {
        openSnackBar({
          type: 'success',
          message:
            'Have nice learning' +
            ` ${
              data?.data?.firstName !== 'undefined' ? data?.data?.firstName : ''
            }`,
        });
        setIsFirstTime(false);
      }
      closeModal();
    },
    onError: () => {
      deleteToken();
    },
  });
};
