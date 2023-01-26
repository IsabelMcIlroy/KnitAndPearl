import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Button } from "@mui/material";

export const ProjectGridCell = ({
  modifyGridColorArray,
  xIndex,
  yIndex,
  currentlySelectedColor,
  cellsColor,
  ownerID,
}) => {
  let { user } = useLoaderData();
  const [cellColor, setCellColor] = useState(cellsColor);
  useEffect(() => {
    setCellColor(cellsColor);
  }, [cellsColor]);
  const onClick = () => {
    modifyGridColorArray(xIndex, yIndex, currentlySelectedColor);
  };

  return (
    <>
      {user.id === ownerID && (
        <Button
          sx={{
            backgroundColor: `rgba(${cellColor.r}, ${cellColor.g}, ${cellColor.b}, ${cellColor.a})`,
            height: "100%",
            minWidth: "100%",
          }}
          onClick={() => onClick()}
        />
      )}
      {user.id !== ownerID && (
        <Button
          sx={{
            backgroundColor: `rgba(${cellColor.r}, ${cellColor.g}, ${cellColor.b}, ${cellColor.a})`,
            height: "100%",
            minWidth: "100%",
          }}
        />
      )}
    </>
  );
};
