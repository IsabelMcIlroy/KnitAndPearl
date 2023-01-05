import { Box, Grid } from "@mui/material";
import { MiniProjectGridCell } from "./MiniProjectGridCell";

export const MiniProjectGrid = ({ currentColumns, grid }) => {
  return (
    <Box>
      <Grid
        container
        spacing={12 / currentColumns}
        sx={{ width: "85%", margin: "24px", aspectRatio: "1/1" }}
      >
        {grid.map((row, xindex) => {
          return row.map((column, yindex) => {
            return (
              <Grid
                item
                xs={12 / currentColumns}
                key={`x:${xindex} y:${yindex}`}
                sx={{
                  border: "1px solid black",
                }}
                style={{ padding: "1%" }}
              >
                <MiniProjectGridCell cellsColor={column} />
              </Grid>
            );
          });
        })}
      </Grid>
    </Box>
  );
};
