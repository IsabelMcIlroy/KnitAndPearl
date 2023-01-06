import { Box, Grid, Typography } from "@mui/material";
import { NewProjectEditor } from "./NewProjectEditor";
import { ProjectGridCell } from "./ProjectGridCell";
import { palette } from "../../assets/theme";

export const ProjectGrid = ({
  currentlySelectedColor,
  gridArray,
  setGridArray,
  currentColumns,
  currentProjectName,
  currentProjectType,
  setCurrentlySelectedColor,
  clearGrid,
  projectID,
  gridColours,
  user,
  username,
}) => {
  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    const newGridArray = [...gridArray];
    newGridArray[xIndex][yIndex] = currentlySelectedColor;
    setGridArray(newGridArray);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", minWidth: "100vw" }}>
      <Box
        sx={{
          display: "flex",
          margin: "112px 0 24px 0",
        }}
      >
        <Box sx={{ margin: "24px" }}>
          <NewProjectEditor
            currentProjectName={currentProjectName}
            currentProjectType={currentProjectType}
            clearGrid={clearGrid}
            currentlySelectedColor={currentlySelectedColor}
            setCurrentlySelectedColor={setCurrentlySelectedColor}
            projectID={projectID}
            gridArray={gridArray}
            currentColumns={currentColumns}
            gridColours={gridColours}
            user={user}
          />
          <Box
            sx={{
              margin: "24px 0 0 auto",
              padding: "24px",
              borderRadius: "24px",
              backgroundColor: "#F3ECF6",
            }}
          >
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
                        user={user}
                      />
                    </Grid>
                  );
                });
              })}
            </Grid>
            <Typography
              variant="p"
              sx={{
                color: palette.knittingLightPurple,
                display: "flex",
                justifyContent: "end",
                margin: "8px",
              }}
            >
              {username}'s Project
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
