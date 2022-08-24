import React, { useState } from "react";
import { Button } from "@mui/material";

export const ProjectGridCell = ({
  modifyGridColorArray,
  xIndex,
  yIndex,
  currentlySelectedColor,
  defaultColor,
}) => {
  const [cellColor, setCellColor] = useState(defaultColor);

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
      key={yIndex + xIndex}
      onClick={() => onClick()}
    />
  );
};
