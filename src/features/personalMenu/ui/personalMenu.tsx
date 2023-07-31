import { PersonalMenuList } from 'entities/personalMenuList';
import { PersonalMenuName } from 'entities/personalMenuName';
import { personalMenuProps } from 'features/personalMenu/lib/personalMenuTypes';
import { useGetNavigateFunctions } from 'features/personalMenu/lib/useGetNavigateFunctions';

export const PersonalMenu = ({ handleOpenModal }: personalMenuProps) => {
  const { anchorEl, handleClick, open, handleClose } =
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
