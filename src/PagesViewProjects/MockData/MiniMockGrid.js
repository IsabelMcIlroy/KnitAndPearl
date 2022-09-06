import { Box, Grid } from "@mui/material";
import { MiniMockGridCell } from "./MiniMockGridCell";

export const MiniMockGrid = ({ mockColumns }) => {
  const gridArray = [
    [
      { r: 241, g: 112, b: 19, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 241, g: 112, b: 19, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 241, g: 112, b: 19, a: 1 },
    ],
    [
      { r: 235, g: 150, b: 148, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 241, g: 112, b: 19, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
    ],
    [
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 241, g: 112, b: 19, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 241, g: 112, b: 19, a: 1 },
      { r: 241, g: 112, b: 19, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
    ],
    [
      { r: 235, g: 150, b: 148, a: 1 },
      { r: 241, g: 112, b: 19, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
    ],
    [
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
    ],
    [
      { r: 0, g: 107, b: 118, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
      { r: 235, g: 150, b: 148, a: 1 },
      { r: 0, g: 107, b: 118, a: 1 },
    ],
  ];
  return (
    <Box>
      <Grid
        container
        spacing={12 / mockColumns}
        sx={{ width: "70%", margin: "24px" }}
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
                <MiniMockGridCell
                  xIndex={xindex}
                  yIndex={yindex}
                  cellsColour={gridArray[xindex][columns]}
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
