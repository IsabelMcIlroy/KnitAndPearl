import { Typography, Box } from "@mui/material";
import {
  editorDrawerProjectNames,
  editorDrawerLabels,
} from "../../assets/theme";
import { ColorPicker } from "./ColorPicker";

export const NewProjectEditor = ({
  currentProjectName,
  currentProjectType,
  currentlySelectedColor,
  setCurrentlySelectedColor,
}) => {
  return (
    <>
      <Box sx={{ margin: "18px" }}>
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
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5" sx={editorDrawerLabels}>
            Project Type:
          </Typography>
          <Typography variant="h5" sx={editorDrawerProjectNames}>
            {currentProjectType || "---"}
          </Typography>
        </Box>
        <Typography variant="h5" sx={editorDrawerLabels}>
          Wool Color:
        </Typography>
        <ColorPicker
          currentlySelectedColor={currentlySelectedColor}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
        />
      </Box>
    </>
  );
};
