import { PersonalMenuList } from 'entities/personalMenuList';
import { PersonalMenuName } from 'entities/personalMenuName';
import { useGetNavigateFunctions } from 'features/personalMenu/lib/useGetNavigateFunctions';

export const PersonalMenu = () => {
  const { anchorEl, handleClick, open, handleClose, handleOpenModal } =
    useGetNavigateFunctions();

  return (
    <>
      <PersonalMenuName
        handleClick={handleClick}
        handleOpenModal={handleOpenModal}
        firstName="name"
        isAuthorized={false}
        open={open}
      />
      <PersonalMenuList
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleOpenModal={handleOpenModal}
        open={open}
        firstName="Dmytro"
        secondName="Nykytenko"
        isAuthorized={false}
      />
    </>
  );
};
