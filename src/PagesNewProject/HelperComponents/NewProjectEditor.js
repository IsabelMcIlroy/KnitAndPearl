import { Typography, Box } from "@mui/material";
import {
  editorDrawerProjectNames,
  editorDrawerLabels,
} from "../../assets/theme";

export const NewProjectEditor = ({
  currentProjectName,
  currentProjectType,
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
        <Typography variant="h4" sx={editorDrawerLabels}>
          Project Name:
        </Typography>
        <Typography variant="h5" sx={editorDrawerProjectNames}>
          {currentProjectName || "---"}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h4" sx={editorDrawerLabels}>
          Project Type:
        </Typography>
        <Typography variant="h5" sx={editorDrawerProjectNames}>
          {currentProjectType || "---"}
        </Typography>
      </Box>
    </>
  );
};
