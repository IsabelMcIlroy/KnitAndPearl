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
  // useEffect(() => {
  //   setCellColor(
  //     `rgba(${gridArray[xIndex][yIndex].r}, ${gridArray[xIndex][yIndex].g}, ${gridArray[xIndex][yIndex].b}, ${gridArray[xIndex][yIndex].a})`
  //   );
  // }, [gridArray[xIndex][yIndex].r]);
  const onClick = () => {
    setCellColor(
      `rgba(${currentlySelectedColor.r}, ${currentlySelectedColor.g}, ${currentlySelectedColor.b}, ${currentlySelectedColor.a})`
    );
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
