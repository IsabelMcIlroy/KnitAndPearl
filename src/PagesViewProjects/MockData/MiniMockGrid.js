import { Box, Grid } from "@mui/material";
import { ProjectGridCell } from "../../PagesNewProject/HelperComponents/ProjectGridCell";

export const MiniMockGrid = ({ mockColumns, gridArray }) => {
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
                  cellsColour={gridArray[yindex][xindex]}
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
