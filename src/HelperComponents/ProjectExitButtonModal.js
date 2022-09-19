import { useNavigate } from "react-router-dom";
import { Modal, ThemeProvider, Typography, Box } from "@mui/material";
import KnittingTheme, { palette, modalTitle } from "../assets/theme";
import { ModalButton } from "./ModalButton";

export const ProjectExitButtonModal = ({ open, onClick, setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClick={onClick}>
        <Box
          style={{
            overflowY: "auto",
            overflowStyle: "scroll",
            transform: "translate(25%, 15%)",
            display: "inline-block",
            height: "80%",
            maxHeight: "500px",
            width: "70%",
          }}
        >
          <Typography variant="h4" sx={modalTitle}>
            Exit Knitting Project
          </Typography>
          <Box
            sx={{
              padding: "24px 24px 0 24px",
              backgroundColor: palette.knittingGray,
              borderRadius: "0 0 24px 24px",
            }}
          >
            <Typography variant="inherit" color={palette.knittingPurple}>
              Do you want to save before you exit?
            </Typography>
            <ModalButton
              text="Save and Exit"
              onClick={() => navigate("/KnittingProjectManager/ViewProject")}
            />
            <ModalButton
              text="Exit"
              onClick={() => navigate("/KnittingProjectManager/ViewProject")}
            />
            <ModalButton
              text="Cancel"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};
