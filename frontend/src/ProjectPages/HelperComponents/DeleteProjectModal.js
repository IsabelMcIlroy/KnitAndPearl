import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Modal, ThemeProvider, Typography, Box } from "@mui/material";
import KnittingTheme, { palette, modalTitle } from "../../assets/theme";
import { ModalButton } from "../../HelperComponents/ModalButton";

export const DeleteProjectModal = ({
  open,
  onClick,
  setIsOpen,
  projectID,
  ownerID,
}) => {
  let { user } = useLoaderData();
  const navigate = useNavigate();
  const onDelete = async () => {
    const response = await fetch(`/api/projects/${projectID}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      if (response.status === 401) {
        console.log("No Project");
        navigate("/NoProject");
      }
    } else {
      const payload = await response.json();
      console.log(payload);
      navigate("/ViewProjects");
    }
  };
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClick={onClick}>
        <Box
          style={{
            overflowY: "auto",
            overflowStyle: "scroll",
            transform: "translate(50%, 35%)",
            display: "inline-block",
            height: "80%",
            maxHeight: "500px",
            width: "50%",
          }}
        >
          <Typography variant="h4" sx={modalTitle}>
            Delete Knitting Project
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
                WAIT! Are you surey you want to delete this project?!
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
              {user.id === ownerID && (
                <ModalButton
                  text="Delete"
                  variant="SaveAndExit"
                  onClick={() => onDelete()}
                  sx={{ width: "fit-content" }}
                />
              )}
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
