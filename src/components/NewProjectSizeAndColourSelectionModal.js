import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material";
import KnittingTheme from "../assets/Theme";

export const NewProjectSizeAndColourSelectionModal = ({
  open,
  handleClose,
}) => {
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClose={handleClose}>
        <>
          <h1>Hello</h1>
          <p>the big red dump truck went down the road</p>
        </>
      </Modal>
    </ThemeProvider>
  );
};
