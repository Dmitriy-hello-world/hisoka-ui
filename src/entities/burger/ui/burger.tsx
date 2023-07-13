import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { burgerProps } from 'entities/burger/lib/burgerProps';

export const Burger = ({ handleOnClick }: burgerProps) => {
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOnClick}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
