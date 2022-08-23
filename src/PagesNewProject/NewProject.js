import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { NewProjectEditorDrawer } from "./HelperComponents/NewProjectEditorDrawer";
import { ProjectGrid } from "./HelperComponents/ProjectGrid";

export const NewProject = () => {
  const { state } = useLocation();
  const { currentProjectName, currentProjectType } = state;
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <NewProjectEditorDrawer
        currentProjectNameForDrawer={currentProjectName}
        currentProjectTypeForDrawer={currentProjectType}
        currentlySelectedColor={currentlySelectedColor}
        setCurrentlySelectedColor={setCurrentlySelectedColor}
      />
      <ProjectGrid currentlySelectedColor={currentlySelectedColor} />
    </Box>
  );
};
