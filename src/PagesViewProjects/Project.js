import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { ProjectGrid } from "../PagesNewProject/HelperComponents/ProjectGrid";

export const Project = () => {
  const { state } = useLocation();
  const {
    projectID,
    currentProjectName,
    currentProjectType,
    currentRows,
    currentColumns,
    gridColours,
  } = state;
  let grid = JSON.parse(gridColours);
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });
  const [gridArray, setGridArray] = useState(grid);
  const clearGrid = () => {
    setGridArray(grid);
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <ProjectGrid
        currentlySelectedColor={currentlySelectedColor}
        currentProjectName={currentProjectName}
        currentProjectType={currentProjectType}
        gridArray={gridArray}
        setGridArray={setGridArray}
        currentColumns={currentColumns}
        currentRows={currentRows}
        clearGrid={clearGrid}
        setCurrentlySelectedColor={setCurrentlySelectedColor}
        projectID={projectID}
      />
    </Box>
  );
};
