import { Box, Grid, Typography } from "@mui/material";
import { palette } from "../../assets/theme";
import { ProjectGridCell } from "../../PagesNewProject/HelperComponents/ProjectGridCell";

export const MockGrid = ({
  mockColumns,
  currentlySelectedColor,
  gridArray,
  gridColors,
  setGridColors,
  currentProjectName,
  currentProjectType,
}) => {
  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    gridArray[xIndex][yIndex] = currentlySelectedColor;
    setGridColors(gridArray);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", minWidth: "100vw" }}>
      <Box sx={{ padding: "100px 0 24px 100px" }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "La Belle Aurore", color: palette.knittingPurple }}
        >
          Project: {currentProjectName} {currentProjectType}
        </Typography>
        <Grid
          container
          spacing={12 / mockColumns}
          sx={{
            margin: "24px auto 0 auto",
            width: "50%",
          }}
        >
          {gridArray.map((columns, yindex) => {
            return gridArray[1].map((rows, xindex) => {
              return (
                <Grid
                  item
                  xs={12 / mockColumns}
                  key={`x:${xindex} y:${yindex}`}
                  sx={{
                    border: "1px solid black",
                    aspectRatio: "1/1",
                  }}
                  style={{ padding: "4px" }}
                >
                  <ProjectGridCell
                    xIndex={xindex}
                    yIndex={yindex}
                    currentlySelectedColor={currentlySelectedColor}
                    cellsColour={gridArray[xindex][columns]}
                    modifyGridColorArray={modifyGridColorArray}
                    gridArray={gridArray}
                  />
                </Grid>
              );
            });
          })}
        </Grid>
      </Box>
    </Box>
  );
};
