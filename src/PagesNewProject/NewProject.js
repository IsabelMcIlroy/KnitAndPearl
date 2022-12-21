import { useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "react-fetch-hook";
import { Box } from "@mui/material";
import { ProjectGrid } from "./HelperComponents/ProjectGrid";

export const NewProject = () => {
  const { isLoading, data, error } = useFetch("/projects/checkUser");
  console.log(isLoading);
  console.log(data);
  console.log(error);
  const { state } = useLocation();
  const {
    projectID,
    currentProjectName,
    currentProjectType,
    currentColumns,
    currentRows,
    gridColours,
  } = state;
  const currentGridColours = JSON.parse(gridColours);
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
  const [gridArray, setGridArray] = useState(currentGridColours);
  const clearGrid = () => {
    setGridArray(grid);
  };
  return (
    <>
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
          gridColours={currentGridColours}
          grid={grid}
        />
      </Box>
    </>
  );
};
