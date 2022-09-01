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
}) => {
  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    gridArray[yIndex][xIndex] = currentlySelectedColor;
    setGridColors(gridColors);
  };
  return (
    <Box sx={{ padding: "100px 0 24px 100px" }}>
      <Typography
        variant="h1"
        sx={{ fontFamily: "La Belle Aurore", color: palette.knittingPurple }}
      >
        {currentProjectName}
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
                  cellsColour={gridArray[yindex][rows]}
                  modifyGridColorArray={modifyGridColorArray}
                  gridArray={gridArray}
                />
              </Grid>
            );
          });
        })}
      </Grid>
    </Box>
  );
};
