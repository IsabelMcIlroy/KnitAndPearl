import { Box, Grid } from "@mui/material";
import { NewProjectEditor } from "./NewProjectEditor";
import { ProjectGridCell } from "./ProjectGridCell";

export const ProjectGrid = ({
  currentlySelectedColor,
  gridArray,
  setGridArray,
  currentColumns,
  currentProjectName,
  currentProjectType,
  setCurrentlySelectedColor,
  clearGrid,
  projectID,
}) => {
  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    const newGridArray = [...gridArray];
    newGridArray[xIndex][yIndex] = currentlySelectedColor;
    setGridArray(newGridArray);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", minWidth: "100vw" }}>
      <Box
        sx={{
          display: "flex",
          margin: "112px 0 24px 0",
        }}
      >
        <Box sx={{ margin: "24px" }}>
          <NewProjectEditor
            currentProjectName={currentProjectName}
            currentProjectType={currentProjectType}
            clearGrid={clearGrid}
            currentlySelectedColor={currentlySelectedColor}
            setCurrentlySelectedColor={setCurrentlySelectedColor}
            projectID={projectID}
            gridArray={gridArray}
          />
          <Grid
            container
            spacing={12 / currentColumns}
            sx={{
              margin: "24px 8px 0 auto",
              maxWidth: "80vh",
              minWidth: "300px",
              aspectRatio: "1/1",
              padding: "24px",
              borderRadius: "24px",
              backgroundColor: "#F3ECF6",
            }}
          >
            {gridArray.map((row, xindex) => {
              return row.map((column, yindex) => {
                return (
                  <Grid
                    item
                    xs={12 / currentColumns}
                    key={`x:${xindex} y:${yindex}`}
                    sx={{
                      border: "1px solid black",
                    }}
                    style={{ padding: "4px" }}
                  >
                    <ProjectGridCell
                      xIndex={xindex}
                      yIndex={yindex}
                      currentlySelectedColor={currentlySelectedColor}
                      cellsColor={column}
                      modifyGridColorArray={modifyGridColorArray}
                    />
                  </Grid>
                );
              });
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
