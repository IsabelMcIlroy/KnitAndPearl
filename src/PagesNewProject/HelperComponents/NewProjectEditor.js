import { useState } from "react";
import { Typography, Box } from "@mui/material";
import {
  editorDrawerProjectNames,
  editorDrawerLabels,
} from "../../assets/theme";
import { ColorPicker } from "./ColorPicker";
import { EditButtonsAndPopover } from "./EditButtonsAndPopovers";
import { ProjectExitButtonModal } from "../../HelperComponents/ProjectExitButtonModal";

export const NewProjectEditor = ({
  currentProjectName,
  currentProjectType,
  currentlySelectedColor,
  setCurrentlySelectedColor,
  clearGrid,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = window.location.pathname;
  return (
    <>
      <Box sx={{ margin: "18px" }}>
        <Box sx={{ display: "flex", paddingTop: "12px" }}>
          <Typography variant="h8" sx={editorDrawerLabels}>
            Project Name:
          </Typography>
          <Typography variant="h5" sx={editorDrawerProjectNames}>
            {currentProjectName || "---"}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h8" sx={editorDrawerLabels}>
            Project Type:
          </Typography>
          <Typography variant="h5" sx={editorDrawerProjectNames}>
            {currentProjectType || "---"}
          </Typography>
        </Box>
        <hr sx={editorDrawerLabels} />
        <Typography variant="h8" sx={editorDrawerLabels}>
          Wool Color:
        </Typography>
        <ColorPicker
          currentlySelectedColor={currentlySelectedColor}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
        />
        <hr sx={editorDrawerLabels} />
        <Box sx={{ textAlign: "center", marginTop: "18px" }}>
          {pathName !== "/KnittingProjectManager/NewProject" && (
            <EditButtonsAndPopover
              popoverText={"Reset Project."}
              onClick={() => {
                clearGrid();
              }}
            />
          )}
          {pathName === "/KnittingProjectManager/NewProject" && (
            <EditButtonsAndPopover
              popoverText={"Clear Grid."}
              onClick={() => {
                clearGrid();
              }}
            />
          )}
          <EditButtonsAndPopover popoverText={"Save."} />
          <EditButtonsAndPopover
            popoverText={"Exit."}
            onClick={() => {
              setIsOpen(true);
            }}
          />
          <ProjectExitButtonModal open={isOpen} setIsOpen={setIsOpen} />
        </Box>
      </Box>
    </>
  );
};
