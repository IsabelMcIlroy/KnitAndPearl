import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { ProjectGridCell } from "./ProjectGridCell";

export const ProjectGrid = ({
  currentlySelectedColor,
  gridArray,
  gridColors,
  setGridColors,
}) => {
  const { state } = useLocation();
  const { currentColumns } = state;
  const DEFAULT_COLOR = "#E8E1EC";
  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    gridColors[yIndex][xIndex] = currentlySelectedColor;
    setGridColors(gridColors);
  };
  return (
    <>
      <Grid
        container
        spacing={12 / currentColumns}
        sx={{
          margin: "112px auto 0 auto",
          width: "50%",
        }}
      >
        {gridArray.map((columns, yindex) => {
          return gridArray[1].map((rows, xindex) => {
            return (
              <Grid
                item
                xs={12 / currentColumns}
                key={yindex + xindex}
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
                  defaultColor={DEFAULT_COLOR}
                  modifyGridColorArray={modifyGridColorArray}
                />
              </Grid>
            );
          });
        })}
      </Grid>
    </>
  );
};
