import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Button } from "@mui/material";

export const ProjectGrid = () => {
  const { state } = useLocation();
  const { currentRows, currentColumns } = state;
  const [background, setBackground] = useState({ background: "#E8E1EC" });
  let gridArray = Array(parseInt(currentRows))
    .fill(0)
    .map(() => new Array(parseInt(currentColumns)).fill(background));
  // const handleChangeColor = (rowindex, columnindex) => {
  //   const newGridArray = [...gridArray];
  //   newGridArray[rowindex][columnindex] = setBackground("#ffffff");
  // };
  return (
    <>
      <Grid
        container
        spacing={12 / currentRows}
        sx={{
          margin: "112px auto 0 auto",
          justifyContent: "center",
          width: "40%",
        }}
      >
        {gridArray.map((xindex) => {
          return gridArray.map((yindex) => {
            return (
              <Grid
                item
                rowindex={xindex}
                columnindex={yindex}
                xs={12 / currentRows}
                sx={{
                  border: "1px solid black",
                  aspectRatio: "1/1",
                }}
                style={{ padding: "4px" }}
              >
                <Button
                  rowindex={xindex}
                  columnindex={yindex}
                  sx={{
                    backgroundColor: `${background}`,
                    height: "100%",
                    minWidth: "100%",
                  }}
                  //onClick={handleChangeColor()}
                />
              </Grid>
            );
          });
        })}
      </Grid>
    </>
  );
};
