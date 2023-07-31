import { atom } from 'jotai';

export const isModalOpenBase = atom(false);

export const currentModalType = atom<'reg' | 'log'>('reg');

export const handleOpenModal = atom(
  (get) => {
    return get(currentModalType);
  },
  (_, set, type: 'reg' | 'log') => {
    set(currentModalType, type);
    set(isModalOpenBase, true);
  }
);

export const handleCloseModal = atom(null, (_, set) => {
  set(isModalOpenBase, false);
});
