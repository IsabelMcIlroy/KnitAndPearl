import React, { useState, useEffect } from "react";
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
  }, [gridArray, xIndex, yIndex, cellColor]);
  const onClick = () => {
    console.log(gridArray);
    console.log(currentlySelectedColor);
    modifyGridColorArray(xIndex, yIndex, currentlySelectedColor);
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
