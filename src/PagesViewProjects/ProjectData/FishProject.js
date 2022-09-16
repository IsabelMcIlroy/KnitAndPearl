import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { NewProjectEditorDrawer } from "../../PagesNewProject/HelperComponents/NewProjectEditorDrawer";
import { ProjectGrid } from "../../PagesNewProject/HelperComponents/ProjectGrid";
import { fishGrid } from "./MockData";

export const FishProject = () => {
  const { state } = useLocation();
  const { currentProjectName, currentProjectType } = state;
  const currentColumns = 9;
  const currentRows = 7;
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });
  const [gridArray, setGridArray] = useState(fishGrid);
  const clearGrid = () => {
    setGridArray(fishGrid);
  };
  console.log(currentlySelectedColor);
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
