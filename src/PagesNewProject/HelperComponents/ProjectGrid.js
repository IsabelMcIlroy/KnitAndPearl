import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { ProjectGridCell } from "./ProjectGridCell";

export const ProjectGrid = ({ currentlySelectedColor, background }) => {
  const { state } = useLocation();
  const { currentRows, currentColumns } = state;
  const DEFAULT_COLOR = "#E8E1EC";

  const gridArray = Array(parseInt(currentColumns))
    .fill(0)
    .map(() => new Array(parseInt(currentRows)).fill(background));
  const [gridColors, setGridColors] = useState(gridArray);
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
                sx={{
                  border: "1px solid black",
                  aspectRatio: "1/1",
                }}
                style={{ padding: "4px" }}
              >
                <ProjectGridCell
                  xIndex={xindex}
                  yIndex={yindex}
                  key={yindex + xindex}
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
