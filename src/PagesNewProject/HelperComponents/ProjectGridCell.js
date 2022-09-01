import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

export const ProjectGridCell = ({
  modifyGridColorArray,
  xIndex,
  yIndex,
  currentlySelectedColor,
  cellsColor,
  gridArray,
}) => {
  const [cellColor, setCellColor] = useState(gridArray[yIndex][xIndex]);
  useEffect(() => {
    setCellColor(cellsColor);
  }, [cellsColor]);
  const onClick = () => {
    setCellColor(
      `rgba(${currentlySelectedColor.r}, ${currentlySelectedColor.g}, ${currentlySelectedColor.b}, ${currentlySelectedColor.a})`
    );
    console.log(gridArray[yIndex][xIndex]);
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
