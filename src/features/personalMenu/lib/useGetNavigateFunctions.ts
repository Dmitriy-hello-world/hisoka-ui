import { useState } from 'react';

export const useGetNavigateFunctions = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenModal = (type: 'log' | 'reg') => console.log(type);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return { anchorEl, handleClick, open, handleClose, handleOpenModal };
};
