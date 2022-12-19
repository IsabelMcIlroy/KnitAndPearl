import { useState } from "react";
import { Typography, Box } from "@mui/material";
import {
  editorDrawerProjectNames,
  editorDrawerLabels,
} from "../../assets/theme";
import { EditProjectNameModal } from "../../HelperComponents/EditProjectNameModal";
import { EditButtonsAll } from "./EditButtonsAll";

export const NewProjectEditor = ({
  currentProjectName,
  currentProjectType,
  clearGrid,
  currentlySelectedColor,
  setCurrentlySelectedColor,
  projectID,
  gridArray,
  gridColours,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          borderRadius: "24px",
          backgroundColor: "#F3ECF6",
          padding: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingTop: "12px",
            alignItems: "baseline",
            flexWrap: "wrap",
          }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Typography variant="h5" sx={editorDrawerLabels}>
            Project Name:
          </Typography>
          <Typography variant="h5" sx={editorDrawerProjectNames}>
            {currentProjectName || "---"}
          </Typography>
          <EditProjectNameModal
            open={isOpen}
            setIsOpen={setIsOpen}
            projectID={projectID}
            projectName={currentProjectName}
            projectType={currentProjectType}
            gridColours={gridColours}
          />
        </Box>
        {currentProjectType && (
          <Box
            sx={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}
          >
            <Typography variant="h5" sx={editorDrawerLabels}>
              Project Type:
            </Typography>
            <Typography variant="h5" sx={editorDrawerProjectNames}>
              {currentProjectType}
            </Typography>
          </Box>
        )}
        <EditButtonsAll
          clearGrid={clearGrid}
          currentlySelectedColor={currentlySelectedColor}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
          projectID={projectID}
          gridArray={gridArray}
        />
      </Box>
    </>
  );
};
