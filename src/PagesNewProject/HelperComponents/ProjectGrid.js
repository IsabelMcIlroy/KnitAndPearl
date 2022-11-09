import _ from "lodash";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { NewProjectEditor } from "./NewProjectEditor";
import { ProjectGridCell } from "./ProjectGridCell";
import { EditButtonsAndPopover } from "./EditButtonsAndPopovers";
import { ProjectExitButtonModal } from "../../HelperComponents/ProjectExitButtonModal";

export const ProjectGrid = ({
  currentlySelectedColor,
  gridArray,
  setGridArray,
  currentColumns,
  currentRows,
  currentProjectName,
  currentProjectType,
  setCurrentlySelectedColor,
  clearGrid,
}) => {
  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    const newGridArray = [...gridArray];
    newGridArray[xIndex][yIndex] = currentlySelectedColor;
    setGridArray(newGridArray);
  };
  const [isOpen, setIsOpen] = useState(false);
  const pathName = window.location.pathname;
  return (
    <Box sx={{ display: "flex", justifyContent: "center", minWidth: "100vw" }}>
      <Box sx={{ padding: "112px 0 24px 0" }}>
        <NewProjectEditor
          currentProjectName={currentProjectName}
          currentProjectType={currentProjectType}
          currentlySelectedColor={currentlySelectedColor}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
          clearGrid={clearGrid}
        />
        <Grid
          container
          spacing={12 / currentColumns}
          sx={{
            margin: "24px 8px 0 auto",
            maxWidth: "80vh",
            minWidth: "300px",
            aspectRatio: "1/1",
          }}
        >
          {gridArray.map((row, xindex) => {
            return row.map((column, yindex) => {
              return (
                <Grid
                  item
                  xs={12 / currentColumns}
                  key={`x:${xindex} y:${yindex}`}
                  sx={{
                    border: "1px solid black",
                  }}
                  style={{ padding: "4px" }}
                >
                  <ProjectGridCell
                    xIndex={xindex}
                    yIndex={yindex}
                    currentlySelectedColor={currentlySelectedColor}
                    cellsColor={column}
                    modifyGridColorArray={modifyGridColorArray}
                  />
                </Grid>
              );
            });
          })}
        </Grid>
        <Grid
          container
          spacing={12 / currentRows}
          sx={{
            marginTop: "12px",
            maxWidth: "80vh",
            minWidth: "300px",
            textAlign: "center",
          }}
        >
          {_.range(currentColumns, 0).map((value) => (
            <Grid item key={value} value={value} xs={12 / currentColumns}>
              {value}
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", marginTop: "18px" }}>
          {pathName !== "/KnittingProjectManager/NewProject" && (
            <EditButtonsAndPopover
              popoverText={"Reset Project."}
              onClick={() => {
                clearGrid();
              }}
            />
          )}
          {pathName === "/KnittingProjectManager/NewProject" && (
            <EditButtonsAndPopover
              popoverText={"Clear Grid."}
              onClick={() => {
                clearGrid();
              }}
            />
          )}
          <EditButtonsAndPopover popoverText={"Save."} />
          <EditButtonsAndPopover
            popoverText={"Exit."}
            onClick={() => {
              setIsOpen(true);
            }}
          />
          <ProjectExitButtonModal open={isOpen} setIsOpen={setIsOpen} />
        </Box>
      </Box>
    </Box>
  );
};
