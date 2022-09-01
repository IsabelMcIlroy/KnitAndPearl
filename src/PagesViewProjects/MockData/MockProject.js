import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { NewProjectEditorDrawer } from "../../PagesNewProject/HelperComponents/NewProjectEditorDrawer";
import { MockGrid } from "./MockGrid";

export const MockProject = () => {
  const { state } = useLocation();
  const { currentProjectName, currentProjectType } = state;
  const mockColumns = 6;
  const mockRows = 6;
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const DEFAULT_COLOR = "#E8E1EC";
  const [background, setBackground] = useState(DEFAULT_COLOR);
  const gridArray = [
    ["#006B76", "#006B76", "#006B76", "#006B76", "#008B02", "#008B02"],
    ["#006B76", "#006B76", "#006B76", "#008B02", "#008B02", "#C1E1C5"],
    ["#006B76", "#006B76", "#008B02", "#008B02", "#C1E1C5", "#C1E1C5"],
    ["#006B76", "#006B76", "#008B02", "#008B02", "#C1E1C5", "#C1E1C5"],
    ["#006B76", "#006B76", "#006B76", "#008B02", "#008B02", "#C1E1C5"],
    ["#006B76", "#006B76", "#006B76", "#006B76", "#008B02", "#008B02"],
  ];
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
        defaultColor={DEFAULT_COLOR}
      />
      <MockGrid
        mockColumns={mockColumns}
        mockRows={mockRows}
        currentlySelectedColor={currentlySelectedColor}
        background={background}
        gridArray={gridArray}
        gridColors={gridColors}
        setGridColors={setGridColors}
        currentProjectName={currentProjectName}
      />
    </Box>
  );
};
