import { useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import { Box, Grid, Typography } from "@mui/material";
import { palette } from "../../assets/theme";
import { ProjectGridCell } from "./ProjectGridCell";

export const ProjectGrid = ({
  currentlySelectedColor,
  currentProjectName,
  currentProjectType,
  background,
}) => {
  const { state } = useLocation();
  const { currentColumns, currentRows } = state;
  let gridArray = Array(parseInt(currentRows))
    .fill(0)
    .map(() => new Array(parseInt(currentColumns)).fill(background));
  const [gridColors, setGridColors] = useState(gridArray);
  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    const newGridArray = [...gridColors];
    newGridArray[xIndex][yIndex] = currentlySelectedColor;
    console.log("modified grid array: ", gridColors);
    setGridColors(newGridArray);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", minWidth: "100vw" }}>
      <Box sx={{ padding: "112px 0 24px 100px" }}>
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
            margin: "24px 8px 0 auto",
            maxWidth: "80vh",
            minWidth: "300px",
            aspectRatio: "1/1",
          }}
        >
          {gridArray.map((row, xindex) => {
            return row.map((column, yindex) => {
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
                    cellsColor={column}
                    modifyGridColorArray={modifyGridColorArray}
                    gridArray={gridArray}
                  />
                </Grid>
              );
            });
          })}
        </Grid>
        <Grid
          container
          spacing={12 / currentRows}
          sx={{
            marginTop: "12px",
            maxWidth: "80vh",
            minWidth: "300px",
            textAlign: "center",
          }}
        >
          {_.range(currentColumns, 0).map((value) => (
            <Grid item key={value} value={value} xs={12 / currentColumns}>
              {value}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
