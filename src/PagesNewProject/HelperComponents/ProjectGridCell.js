import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

export const ProjectGridCell = ({
  modifyGridColorArray,
  xIndex,
  yIndex,
  currentlySelectedColor,
  gridArray,
}) => {
  const [cellColor, setCellColor] = useState(
    `rgba(${gridArray[xIndex][yIndex].r}, ${gridArray[xIndex][yIndex].g}, ${gridArray[xIndex][yIndex].b}, ${gridArray[xIndex][yIndex].a})`
  );
  useEffect(() => {
    setCellColor(
      `rgba(${gridArray[xIndex][yIndex].r}, ${gridArray[xIndex][yIndex].g}, ${gridArray[xIndex][yIndex].b}, ${gridArray[xIndex][yIndex].a})`
    );
  }, [gridArray]);
  const onClick = () => {
    gridArray[xIndex][yIndex] = {
      r: `${currentlySelectedColor.r}`,
      g: `${currentlySelectedColor.g}`,
      b: `${currentlySelectedColor.b}`,
      a: `${currentlySelectedColor.a}`,
    };
    console.log(gridArray);
  };
  return (
    <Button
      sx={{
        backgroundColor: `${cellColor}`,
        height: "100%",
        minWidth: "100%",
      }}
      onClick={() => onClick()}
    />
  );
};
