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
  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    gridArray[yIndex][xIndex] = currentlySelectedColor;
    setGridColors(gridColors);
    console.log(gridArray);
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
                  currentlySelectedColor={currentlySelectedColor}
                  cellsColour={gridArray[yindex][xindex]}
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
