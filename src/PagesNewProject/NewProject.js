import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { NewProjectEditorDrawer } from "./HelperComponents/NewProjectEditorDrawer";
import { ProjectGrid } from "./HelperComponents/ProjectGrid";

export const NewProject = () => {
  const { state } = useLocation();
  const {
    currentProjectName,
    currentProjectType,
    currentRows,
    currentColumns,
  } = state;
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const DEFAULT_COLOR = "#E8E1EC";
  const [background, setBackground] = useState(DEFAULT_COLOR);
  const gridArray = Array(parseInt(currentColumns))
    .fill(0)
    .map(() => new Array(parseInt(currentRows)).fill(background));
  const [gridColors, setGridColors] = useState(gridArray);
  const clearGrid = () => {
    setBackground(DEFAULT_COLOR);
    setGridColors(background);
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
        background={background}
        gridArray={gridArray}
        gridColors={gridColors}
        setGridColors={setGridColors}
      />
    </Box>
  );
};
