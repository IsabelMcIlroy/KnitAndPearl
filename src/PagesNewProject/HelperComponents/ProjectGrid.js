import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Button } from "@mui/material";

export const ProjectGrid = () => {
  const { state } = useLocation();
  const { currentRows, currentColumns } = state;
  const [background, setBackground] = useState("#E8E1EC");
  let gridArray = Array(parseInt(currentColumns))
    .fill(0)
    .map(() => new Array(parseInt(currentRows)).fill(background));
  // const handleChangeColor = () => {
  //   const newGridArray = [...gridArray];
  //   newGridArray[1] = setBackground("#ffffff");
  // };
  return (
    <>
      <Grid
        container
        spacing={12 / currentColumns}
        sx={{
          margin: "112px auto 0 auto",
          justifyContent: "center",
          width: "40%",
        }}
      >
        {gridArray.map(() => {
          return gridArray[1].map(() => {
            return (
              <Grid
                item
                rowindex={Object.keys(gridArray)}
                columnindex={Object.keys(gridArray[1])}
                key={Math.random()}
                xs={12 / currentColumns}
                sx={{
                  border: "1px solid black",
                  aspectRatio: "1/1",
                }}
                style={{ padding: "4px" }}
              >
                <Button
                  rowindex={Object.keys(gridArray)}
                  columnindex={Object.keys(gridArray[1])}
                  key={Math.random()}
                  sx={{
                    backgroundColor: `${background}`,
                    height: "100%",
                    minWidth: "100%",
                  }}
                  // onClick={handleChangeColor()}
                />
              </Grid>
            );
          });
        })}
      </Grid>
    </>
  );
};
