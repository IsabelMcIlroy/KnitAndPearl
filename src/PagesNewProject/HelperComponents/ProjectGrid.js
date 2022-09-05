import { useLocation } from "react-router-dom";
import _ from "lodash";
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
  const { currentColumns, currentRows } = state;
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
        <Grid
          container
          spacing={1}
          sx={{
            marginTop: "112px",
            marginLeft: "-4%",
            justifyContent: "end",
            position: "absolute",
            zIndex: "-10",
          }}
        >
          {_.range(currentRows, 0).map((value) => (
            <Grid
              item
              key={value}
              value={value}
              xs={12}
              sx={{
                height: "50px",
                textAlign: "end",
              }}
            >
              {value}
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={12 / currentRows}
          sx={{
            margin: "24px 0 0 0",
            maxWidth: "80vh",
            minWidth: "300px",
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
