import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { NewProjectEditorDrawer } from "../../PagesNewProject/HelperComponents/NewProjectEditorDrawer";
import { ProjectGrid } from "../../PagesNewProject/HelperComponents/ProjectGrid";
import { mountainsGrid } from "./MockData";

export const MountainsProject = () => {
  const { state } = useLocation();
  const { currentProjectName, currentProjectType } = state;
  const currentColumns = 7;
  const currentRows = 6;
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });
  const [gridArray, setGridArray] = useState(mountainsGrid);
  const clearGrid = () => {
    setGridArray(mountainsGrid);
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <NewProjectEditorDrawer
        currentProjectNameForDrawer={currentProjectName}
        currentProjectTypeForDrawer={currentProjectType}
        currentlySelectedColor={currentlySelectedColor}
        setCurrentlySelectedColor={setCurrentlySelectedColor}
        clearGrid={clearGrid}
      />
      <ProjectGrid
        currentlySelectedColor={currentlySelectedColor}
        currentProjectName={currentProjectName}
        currentProjectType={currentProjectType}
        gridArray={gridArray}
        setGridArray={setGridArray}
        currentColumns={currentColumns}
        currentRows={currentRows}
      />
    </Box>
  );
};
