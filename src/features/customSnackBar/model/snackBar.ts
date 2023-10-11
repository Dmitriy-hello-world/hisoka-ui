import { atom } from 'jotai';

export const isSnackBarOpenBase = atom(false);

export const currentSnackBarType = atom<'success' | 'error'>('success');

export const currentSnackBarMessage = atom<string>('success');

export const handleOpenSnackBar = atom(
  (get) => {
    return {
      type: get(currentSnackBarType),
      message: get(currentSnackBarMessage),
    };
  },
  (
    _,
    set,
    { type, message }: { type: 'success' | 'error'; message: string }
  ) => {
    set(currentSnackBarMessage, message);
    set(currentSnackBarType, type);
    set(isSnackBarOpenBase, true);
  }
);

export const handleCloseSnackBar = atom(null, (_, set) => {
  set(isSnackBarOpenBase, false);
});
