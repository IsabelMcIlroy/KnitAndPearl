import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import KnittingTheme from "../assets/Theme";

export const NewProjectSizeAndColourSelectionModal = ({
  open,
  handleClose,
}) => {
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClose={handleClose}>
        <>
          <Typography variant="h4">New Knitting Project</Typography>
        </>
      </Modal>
    </ThemeProvider>
  );
};
