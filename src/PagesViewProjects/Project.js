import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ProjectGrid } from "../PagesNewProject/HelperComponents/ProjectGrid";

export const NewProject = () => {
  const { id } = useParams;
  console.log(id);
  const { state } = useLocation();
  const {
    currentProjectName,
    currentProjectType,
    currentColumns,
    currentRows,
  } = state;
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });
  const DEFAULT_COLOR = { r: 212, g: 196, b: 251, a: 1 };
  let grid = Array(parseInt(currentRows))
    .fill(0)
    .map(() => new Array(parseInt(currentColumns)).fill(DEFAULT_COLOR));
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
      />
    </Box>
  );
};