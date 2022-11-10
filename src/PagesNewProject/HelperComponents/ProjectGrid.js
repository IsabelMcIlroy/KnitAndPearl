import _ from "lodash";
import { Box, Grid } from "@mui/material";
import { NewProjectEditor } from "./NewProjectEditor";
import { ProjectGridCell } from "./ProjectGridCell";
import { EditButtonsAll } from "./EditButtonsAll";

export const ProjectGrid = ({
  currentlySelectedColor,
  gridArray,
  setGridArray,
  currentColumns,
  currentRows,
  currentProjectName,
  currentProjectType,
  setCurrentlySelectedColor,
  clearGrid,
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
          padding: "24px",
          borderRadius: "24px",
          backgroundColor: "#F3ECF6",
        }}
      >
        <Box sx={{ margin: "24px" }}>
          <NewProjectEditor
            currentProjectName={currentProjectName}
            currentProjectType={currentProjectType}
          />
          <Grid
            container
            spacing={12 / currentColumns}
            sx={{
              margin: "24px 8px 0 auto",
              maxWidth: "80vh",
              minWidth: "300px",
              aspectRatio: "1/1",
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
          <Grid
            container
            spacing={12 / currentRows}
            sx={{
              marginTop: "12px",
              maxWidth: "80vh",
              minWidth: "300px",
              textAlign: "center",
            }}
          >
            {_.range(currentColumns, 0).map((value) => (
              <Grid item key={value} value={value} xs={12 / currentColumns}>
                {value}
              </Grid>
            ))}
          </Grid>
        </Box>
        <EditButtonsAll
          clearGrid={clearGrid}
          currentlySelectedColor={currentlySelectedColor}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
        />
      </Box>
    </Box>
  );
};
