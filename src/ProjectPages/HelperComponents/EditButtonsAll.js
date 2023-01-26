import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { palette } from "../../assets/theme";
import { EditButtonsAndPopover } from "./EditButtonsAndPopovers";
import { ProjectExitButtonModal } from "./ProjectExitButtonModal";
import { ColorPicker } from "./ColorPicker";

export const EditButtonsAll = ({
  clearGrid,
  currentlySelectedColor,
  setCurrentlySelectedColor,
  projectID,
  gridArray,
  ownerID,
}) => {
  let { user } = useLoaderData();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const pathName = window.location.pathname;
  const onSave = async (gridArray) => {
    const response = await fetch(
      `/knitandpearl-backend.up.railway.app/projects/${projectID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gridArray }),
      }
    );
    if (!response.ok) {
      if (response.status === 401) {
        console.log("No Project");
        navigate("/KnitAndPearl/NoProject");
      }
    } else {
      const payload = await response.json();
      console.log(payload);
    }
  };
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "fit-content",
            padding: "12px",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {user.id === ownerID && (
              <Box
                sx={{
                  padding: "8px",
                  width: "fit-content",
                }}
              >
                <Typography variant="h7" sx={{ color: palette.knittingBlue }}>
                  Pick Color:
                </Typography>
                <ColorPicker
                  currentlySelectedColor={currentlySelectedColor}
                  setCurrentlySelectedColor={setCurrentlySelectedColor}
                />
              </Box>
            )}
          </Box>
          <Box>
            <Box sx={{ display: { sm: "block", md: "none" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexWrap: "nowarp",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ margin: "4px", textAlign: "center", width: "40px" }}
                >
                  Clear
                </Typography>
                <Typography
                  variant="p"
                  sx={{ margin: "4px", textAlign: "center", width: "40px" }}
                >
                  Save
                </Typography>
                <Typography
                  variant="p"
                  sx={{ margin: "4px", textAlign: "center", width: "40px" }}
                >
                  Exit
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {pathName !== "/KnittingProjectManager/NewProject" &&
                user.id === ownerID && (
                  <EditButtonsAndPopover
                    popoverText={"Reset"}
                    onClick={() => {
                      clearGrid();
                    }}
                  />
                )}
              {pathName === "/KnittingProjectManager/" &&
                user.id === ownerID && (
                  <EditButtonsAndPopover
                    popoverText={"Clear"}
                    onClick={() => {
                      clearGrid();
                    }}
                  />
                )}
              {user.id === ownerID && (
                <EditButtonsAndPopover
                  popoverText={"Save"}
                  onClick={() => onSave(gridArray)}
                />
              )}
              <EditButtonsAndPopover
                popoverText={"Exit"}
                onClick={() => {
                  setIsOpen(true);
                }}
              />
              <ProjectExitButtonModal
                open={isOpen}
                setIsOpen={setIsOpen}
                gridArray={gridArray}
                projectID={projectID}
                ownerID={ownerID}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
