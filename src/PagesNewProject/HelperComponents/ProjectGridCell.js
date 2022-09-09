import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

export const ProjectGridCell = ({
  modifyGridColorArray,
  xIndex,
  yIndex,
  currentlySelectedColor,
  cellsColor,
}) => {
  const [cellColor, setCellColor] = useState(cellsColor);
  useEffect(() => {
    setCellColor(cellsColor);
  }, [cellsColor]);
  const onClick = () => {
    modifyGridColorArray(xIndex, yIndex, currentlySelectedColor);
  };
  return (
    <Button
      sx={{
        backgroundColor: `rgba(${cellColor.r}, ${cellColor.g}, ${cellColor.b}, ${cellColor.a})`,
        height: "100%",
        minWidth: "100%",
      }}
      onClick={() => onClick()}
    />
  );
};
