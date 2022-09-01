import { Box, Grid } from "@mui/material";
import { ProjectGridCell } from "../../PagesNewProject/HelperComponents/ProjectGridCell";

export const MiniMockGrid = ({
  mockColumns,
  currentlySelectedColor,
  gridArray,
  gridColors,
  setGridColors,
}) => {
  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    gridArray[yIndex][xIndex] = currentlySelectedColor;
    setGridColors(gridColors);
  };
  return (
    <Box>
      <Grid
        container
        spacing={12 / mockColumns}
        sx={{ width: "65%", margin: "24px" }}
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
