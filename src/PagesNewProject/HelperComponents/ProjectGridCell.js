/* eslint-disable */
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
    console.log("hello");
    setCellColor(cellsColor);
  }, [cellsColor]);
  const onClick = () => {
    console.log(currentlySelectedColor);
    modifyGridColorArray(xIndex, yIndex, currentlySelectedColor);
  };
  return (
    <Button
      sx={{
        backgroundColor: `rgba(${cellsColor.r}, ${cellsColor.g}, ${cellsColor.b}, ${cellsColor.a})`,
        height: "100%",
        minWidth: "100%",
      }}
      onClick={() => onClick()}
    />
  );
};