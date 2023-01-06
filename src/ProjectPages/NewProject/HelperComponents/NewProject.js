import { useState } from "react";
import useFetch from "react-fetch-hook";
import { Box } from "@mui/material";
import { ProjectGrid } from "../../HelperComponents/ProjectGrid";

export const NewProject = (project) => {
  const projectID = project.project.id;
  const {
    isLoading,
    data: user,
    error,
  } = useFetch(`/projects/checkUser/${projectID}`);
  console.log(isLoading);
  console.log(error);
  const currentRows = project.project.rows;
  const currentColumns = project.project.columns;
  const gridColours = project.project.grid_colours;
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
          currentProjectName={project.project.name}
          currentProjectType={project.project.type}
          gridArray={gridArray}
          setGridArray={setGridArray}
          currentColumns={currentColumns}
          currentRows={currentRows}
          clearGrid={clearGrid}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
          projectID={projectID}
          gridColours={currentGridColours}
          grid={grid}
          user={user}
          username={project.project.username}
        />
      </Box>
    </>
  );
};
