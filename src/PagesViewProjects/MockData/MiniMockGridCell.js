import React, { useState } from "react";
import { Button } from "@mui/material";

export const MiniMockGridCell = ({ cellsColor }) => {
  const [cellColor] = useState(
    `rgba(${cellsColor.r}, ${cellsColor.g}, ${cellsColor.b}, ${cellsColor.a})`
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
