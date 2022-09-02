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
  const DEFAULT_COLOR = { r: "212", g: "196", b: "251", a: "1" };
  const [background, setBackground] = useState(DEFAULT_COLOR);
  let gridArray = Array(parseInt(currentRows))
    .fill(0)
    .map(() => new Array(parseInt(currentColumns)).fill(background));
  const [gridColors, setGridColors] = useState(gridArray);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <NewProjectEditorDrawer
        currentProjectNameForDrawer={currentProjectName}
        currentProjectTypeForDrawer={currentProjectType}
        currentlySelectedColor={currentlySelectedColor}
        setCurrentlySelectedColor={setCurrentlySelectedColor}
        defaultColor={DEFAULT_COLOR}
        setBackground={setBackground}
        gridArray={gridArray}
      />
      <ProjectGrid
        currentlySelectedColor={currentlySelectedColor}
        background={background}
        gridArray={gridArray}
        gridColors={gridColors}
        setGridColors={setGridColors}
        currentProjectName={currentProjectName}
        currentProjectType={currentProjectType}
      />
    </Box>
  );
};
