import { useNavigate } from "react-router-dom";
import { Modal, ThemeProvider, Typography, Box } from "@mui/material";
import KnittingTheme, { palette, modalTitle } from "../assets/theme";
import { ModalButton } from "./ModalButton";

export const ProjectExitButtonModal = ({
  open,
  onClick,
  setIsOpen,
  gridColours,
}) => {
  const navigate = useNavigate();
  const onSave = async (data) => {
    const response = await fetch("/projects/:id", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const payload = await response.json();
    console.log(payload);
    navigate("/KnitAndPearl/ViewProject");
  };
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClick={onClick}>
        <Box
          style={{
            overflowY: "auto",
            overflowStyle: "scroll",
            transform: "translate(25%, 35%)",
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
            <Box padding="10px" textAlign="center">
              <Typography variant="h7" color={palette.knittingPurple}>
                WAIT! Do you want to save before you exit?
              </Typography>
            </Box>
            <Box
              textAlign="center"
              sx={{
                display: "inline-flex",
                width: "100%",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <ModalButton
                text="Save &amp; Exit"
                variant="SaveAndExit"
                onClick={() => onSave({ gridColours })}
                sx={{ width: "fit-content" }}
              />
              <ModalButton
                text="Exit"
                variant="Exit"
                onClick={() => navigate("/KnitAndPearl/ViewProjects")}
              />
              <ModalButton
                text="Cancel"
                variant="Cancel"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};
