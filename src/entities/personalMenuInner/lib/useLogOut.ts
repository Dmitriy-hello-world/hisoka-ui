import { client } from 'app/tanstackQuery/tanstackQuery';
import { deleteToken } from 'app/tanstackQuery/token';

export const useLogOut = () => {
  deleteToken();
  client.invalidateQueries({
    queryKey: ['user'],
  });
};
