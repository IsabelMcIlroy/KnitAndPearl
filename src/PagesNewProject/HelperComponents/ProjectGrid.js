import { useLocation } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { palette } from "../../assets/theme";
import { ProjectGridCell } from "./ProjectGridCell";

export const ProjectGrid = ({
  currentlySelectedColor,
  gridArray,
  gridColors,
  setGridColors,
  currentProjectName,
  currentProjectType,
}) => {
  const { state } = useLocation();
  const { currentColumns } = state;
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
          spacing={12 / currentColumns}
          sx={{
            margin: "24px auto 0 auto",
            maxWidth: "80vh",
            minWidth: "300px",
            aspectRatio: "1/1",
          }}
        >
          {gridArray.map((rows, xindex) => {
            return gridArray[1].map((columns, yindex) => {
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
