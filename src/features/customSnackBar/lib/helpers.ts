import { useState } from 'react';

export const useControlSnackBar = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'success' | 'error'>('success');

  const handleClick = (type: 'success' | 'error') => {
    setOpen(true);
    setType(type);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return { handleClick, handleClose, open, type };
};
