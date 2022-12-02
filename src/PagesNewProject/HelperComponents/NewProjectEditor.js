import { Typography, Box } from "@mui/material";
import {
  editorDrawerProjectNames,
  editorDrawerLabels,
} from "../../assets/theme";
import { EditButtonsAll } from "./EditButtonsAll";

export const NewProjectEditor = ({
  currentProjectName,
  currentProjectType,
  clearGrid,
  currentlySelectedColor,
  setCurrentlySelectedColor,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          paddingTop: "12px",
          alignItems: "baseline",
        }}
      >
        <Typography variant="h5" sx={editorDrawerLabels}>
          Project Name:
        </Typography>
        <Typography variant="h5" sx={editorDrawerProjectNames}>
          {currentProjectName || "---"}
        </Typography>
      </Box>
      {currentProjectType && (
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
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
      />
    </>
  );
};
