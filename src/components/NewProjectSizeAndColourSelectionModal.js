import Modal from "@mui/material/Modal";

export const NewProjectSizeAndColourSelectionModal = ({
  open,
  handleClose,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <h1>Hello</h1>
        <p>the big red dump truck went down the road</p>
      </>
    </Modal>
  );
};
