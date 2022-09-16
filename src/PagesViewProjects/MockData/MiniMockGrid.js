import { Box, Grid } from "@mui/material";
import { MiniMockGridCell } from "./MiniMockGridCell";

export const MiniMockGrid = ({ mockColumns, grid }) => {
  return (
    <Box>
      <Grid
        container
        spacing={12 / mockColumns}
        sx={{ width: "85%", margin: "24px", aspectRatio: "1/1" }}
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
