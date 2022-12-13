import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { ProjectGrid } from "../PagesNewProject/HelperComponents/ProjectGrid";

export const Project = () => {
  const { state } = useLocation();
  const {
    currentProjectName,
    currentProjectType,
    currentRows,
    currentColumns,
    gridColours,
  } = state;
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });
  const [gridArray, setGridArray] = useState(gridColours);
  const clearGrid = () => {
    setGridArray(gridColours);
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <ProjectGrid
        currentlySelectedColor={currentlySelectedColor}
        currentProjectName={currentProjectName}
        currentProjectType={currentProjectType}
        gridArray={JSON.parse(gridArray)}
        setGridArray={setGridArray}
        currentColumns={currentColumns}
        currentRows={currentRows}
        clearGrid={clearGrid}
        setCurrentlySelectedColor={setCurrentlySelectedColor}
      />
    </Box>
  );
};
