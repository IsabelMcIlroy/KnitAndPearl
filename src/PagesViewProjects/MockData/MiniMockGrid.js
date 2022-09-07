import { Box, Grid } from "@mui/material";
import { MiniMockGridCell } from "./MiniMockGridCell";
import { gridArray } from "./MockData";

export const MiniMockGrid = ({ mockColumns }) => {
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
