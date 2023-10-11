import { Box, Modal } from '@mui/material';
import { RegistrationForm } from 'features/registrationForm';
import { EnterForm } from 'features/enterForm';
import { useAtom } from 'jotai';
import { styles } from 'widgets/modal/consts/styles';
import {
  isModalOpenBase,
  handleOpenModal,
  handleCloseModal,
} from 'widgets/modal/model/model';
import style from './customModal.module.scss';

export const CustomModal = () => {
  const [isModalOpen] = useAtom(isModalOpenBase);
  const [openModalType] = useAtom(handleOpenModal);
  const [_, closeModal] = useAtom(handleCloseModal);

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles} className={style.wrapper}>
          {openModalType === 'reg' && (
            <RegistrationForm closeModal={closeModal} />
          )}
          {openModalType === 'log' && <EnterForm />}
        </Box>
      </Modal>
    </div>
  );
};
