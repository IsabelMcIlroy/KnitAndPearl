import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { ProjectGridCell } from "./ProjectGridCell";

export const ProjectGrid = ({ currentlySelectedColor }) => {
  const { state } = useLocation();
  const { currentRows, currentColumns } = state;
  const DEFAULT_COLOR = "#E8E1EC";
  const [background, setBackground] = useState(DEFAULT_COLOR);
  const gridArray = Array(parseInt(currentColumns))
    .fill(0)
    .map(() => new Array(parseInt(currentRows)).fill(background));
  const [gridColors, setGridColors] = useState(gridArray);

  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    gridColors[yIndex][xIndex] = currentlySelectedColor;
    setGridColors(gridColors);
  };
  useEffect(() => {
    console.log(gridColors);
  }, [gridColors]);
  console.log(Object.keys(gridArray));
  console.log(Object.keys(gridArray[1]));
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
                rowindex={Object.keys(gridArray)}
                columnindex={Object.keys(gridArray[1])}
                key={Math.random()}
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
