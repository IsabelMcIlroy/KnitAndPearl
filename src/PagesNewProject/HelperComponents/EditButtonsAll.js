import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { palette } from "../../assets/theme";
import { EditButtonsAndPopover } from "./EditButtonsAndPopovers";
import { ProjectExitButtonModal } from "../../HelperComponents/ProjectExitButtonModal";
import { ColorPicker } from "./ColorPicker";

export const EditButtonsAll = ({
  clearGrid,
  currentlySelectedColor,
  setCurrentlySelectedColor,
  grid,
  projectID,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = window.location.pathname;
  const onSave = async (data) => {
    const response = await fetch(`/projects/${projectID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const payload = await response.json();
    console.log(payload);
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
              {pathName !== "/KnittingProjectManager/NewProject" && (
                <EditButtonsAndPopover
                  popoverText={"Reset"}
                  onClick={() => {
                    clearGrid();
                  }}
                />
              )}
              {pathName === "/KnittingProjectManager/" && (
                <EditButtonsAndPopover
                  popoverText={"Clear"}
                  onClick={() => {
                    clearGrid();
                  }}
                />
              )}
              <EditButtonsAndPopover
                popoverText={"Save"}
                onClick={() => onSave(grid)}
              />
              <EditButtonsAndPopover
                popoverText={"Exit"}
                onClick={() => {
                  setIsOpen(true);
                }}
              />
              <ProjectExitButtonModal
                open={isOpen}
                setIsOpen={setIsOpen}
                gridColours={grid}
                projectID={projectID}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
