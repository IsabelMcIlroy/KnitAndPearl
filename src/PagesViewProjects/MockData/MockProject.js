import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { NewProjectEditorDrawer } from "../../PagesNewProject/HelperComponents/NewProjectEditorDrawer";
import { MockGrid } from "./MockGrid";
import { grid } from "./MockData";

export const MockProject = () => {
  const { state } = useLocation();
  const { currentProjectName, currentProjectType } = state;
  const mockColumns = 6;
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });
  const DEFAULT_COLOR = { r: 212, g: 196, b: 251, a: 1 };
  const [gridArray, setGridArray] = useState(grid);
  const clearGrid = () => {
    setGridArray(grid);
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <NewProjectEditorDrawer
        currentProjectNameForDrawer={currentProjectName}
        currentProjectTypeForDrawer={currentProjectType}
        currentlySelectedColor={currentlySelectedColor}
        setCurrentlySelectedColor={setCurrentlySelectedColor}
        defaultColor={DEFAULT_COLOR}
        clearGrid={clearGrid}
      />
      <MockGrid
        mockColumns={mockColumns}
        currentlySelectedColor={currentlySelectedColor}
        gridArray={gridArray}
        setGridArray={setGridArray}
        currentProjectName={currentProjectName}
        currentProjectType={currentProjectType}
      />
    </Box>
  );
};
