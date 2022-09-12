import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import _ from 'lodash';
import { Box, Grid, Typography } from '@mui/material';
import { palette } from '../../assets/theme';
import { ProjectGridCell } from './ProjectGridCell';

export const ProjectGrid = ({
  currentlySelectedColor,
  setGridColors,
  currentProjectName,
  currentProjectType,
  gridColors,
}) => {
  const { state } = useLocation();
  const { currentColumns, currentRows } = state;

  const DEFAULT_COLOR = { r: 212, g: 196, b: 251, a: 1 };

  let grid = Array(parseInt(currentRows))
    .fill(0)
    .map(() => new Array(parseInt(currentColumns)).fill(DEFAULT_COLOR));

  const [gridArray, setGridArray] = useState(grid);

  const modifyGridColorArray = (xIndex, yIndex, currentlySelectedColor) => {
    const newGridArray = [...gridArray];
    console.log(gridArray);
    newGridArray[xIndex][yIndex] = currentlySelectedColor;
    setGridArray(newGridArray);
  };
  console.log(gridArray);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', minWidth: '100vw' }}>
      <Box sx={{ padding: '100px 0 24px 100px' }}>
        <Typography
          variant='h3'
          sx={{ fontFamily: 'La Belle Aurore', color: palette.knittingPurple }}>
          Project: {currentProjectName} {currentProjectType}
        </Typography>
        <Grid
          container
          spacing={12 / currentColumns}
          sx={{
            margin: '24px 8px 0 auto',
            maxWidth: '80vh',
            minWidth: '300px',
            aspectRatio: '1/1',
          }}>
          {gridArray.map((row, xindex) => {
            return row.map((column, yindex) => {
              return (
                <Grid
                  item
                  xs={12 / currentColumns}
                  key={`x:${xindex} y:${yindex}`}
                  sx={{
                    border: '1px solid black',
                  }}
                  style={{ padding: '4px' }}>
                  <ProjectGridCell
                    xIndex={xindex}
                    yIndex={yindex}
                    currentlySelectedColor={currentlySelectedColor}
                    cellsColor={column}
                    modifyGridColorArray={modifyGridColorArray}
                    gridArray={gridArray}
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
            marginTop: '12px',
            maxWidth: '80vh',
            minWidth: '300px',
            textAlign: 'center',
          }}>
          {_.range(currentColumns, 0).map((value) => (
            <Grid item key={value} value={value} xs={12 / currentColumns}>
              {value}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
