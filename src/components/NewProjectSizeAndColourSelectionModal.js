import Modal from "@mui/material/Modal";

export const ModalBase = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <></>
    </Modal>
  );
};
