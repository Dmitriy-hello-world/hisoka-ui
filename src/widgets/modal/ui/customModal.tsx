import { Box, Modal, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { style } from 'widgets/modal/consts/style';
import {
  isModalOpenBase,
  handleOpenModal,
  handleCloseModal,
} from 'widgets/modal/model/model';

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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {openModalType === 'log' ? 'log' : 'reg'}
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
          {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
          {/* </Typography> */}
        </Box>
      </Modal>
    </div>
  );
};
