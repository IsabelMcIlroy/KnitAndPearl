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
        >
          <Typography variant="h5" sx={editorDrawerLabels}>
            Project Name:
          </Typography>
          <Typography variant="h5" sx={editorDrawerProjectNames}>
            {currentProjectName || "---"}
          </Typography>
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
        />
      </Box>
    </>
  );
};
