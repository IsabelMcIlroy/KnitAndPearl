import { Box, Grid } from "@mui/material";
import { MiniMockGridCell } from "./MiniMockGridCell";
import { grid } from "./MockData";

export const MiniMockGrid = ({ mockColumns }) => {
  return (
    <Box>
      <Grid
        container
        spacing={12 / mockColumns}
        sx={{ width: "70%", margin: "24px" }}
      >
        {grid.map((row, xindex) => {
          return row.map((column, yindex) => {
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
                <MiniMockGridCell cellsColor={column} />
              </Grid>
            );
          });
        })}
      </Grid>
    </Box>
  );
};
