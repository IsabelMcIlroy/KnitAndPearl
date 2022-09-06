import React, { useState } from "react";
import { Button } from "@mui/material";

export const MiniMockGridCell = ({ xIndex, yIndex, gridArray }) => {
  const [cellColor] = useState(
    `rgba(${gridArray[xIndex][yIndex].r}, ${gridArray[xIndex][yIndex].g}, ${gridArray[xIndex][yIndex].b}, ${gridArray[xIndex][yIndex].a})`
  );
  return (
    <Button
      disabled
      sx={{
        backgroundColor: `${cellColor}`,
        height: "100%",
        minWidth: "100%",
      }}
    />
  );
};
