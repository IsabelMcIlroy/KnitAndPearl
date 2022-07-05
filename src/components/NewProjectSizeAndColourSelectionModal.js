import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import KnittingTheme from "../assets/Theme";

export const NewProjectSizeAndColourSelectionModal = ({
  open,
  handleClose,
  onClick,
}) => {
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClose={handleClose} onClick={onClick}>
        <>
          <Typography
            variant="h4"
            sx={{ fontFamily: "La Belle Aurore", textAlign: "center" }}
          >
            New Knitting Project
          </Typography>
        </>
      </Modal>
    </ThemeProvider>
  );
};
