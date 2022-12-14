import { useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "react-fetch-hook";
import { Box } from "@mui/material";
import { ProjectGrid } from "./HelperComponents/ProjectGrid";

export const NewProject = () => {
  const { isLoading, data: project, error } = useFetch("/projects/project");
  //let gridColours = project[0].grid_colours;
  console.log(isLoading);
  console.log(project);
  //console.log(gridColours);
  console.log(error);
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
        clearGrid={clearGrid}
        setCurrentlySelectedColor={setCurrentlySelectedColor}
        grid={grid}
      />
    </Box>
  );
};
