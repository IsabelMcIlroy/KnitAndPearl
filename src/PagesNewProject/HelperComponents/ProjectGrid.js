import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Button } from "@mui/material";

export const ProjectGrid = () => {
  const { state } = useLocation();
  const { currentRows, currentColumns } = state;
  const [background, setBackground] = useState("#E8E1EC");
  useEffect(() => {
    let gridArray = Array(parseInt(currentRows))
      .fill(0)
      .map(() => new Array(parseInt(currentColumns)).fill(background));
    console.log(gridArray);
  });
  const rowArray = Array(...Array(parseInt(currentRows)).keys());
  const columnArray = Array(...Array(parseInt(currentRows)).keys());
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
        {rowArray.map((xindex) => {
          return columnArray.map((yindex) => {
            return (
              <Grid
                item
                rowindex={xindex}
                columnindex={yindex}
                key={(xindex, yindex)}
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
                    backgroundColor: "#E8E1EC",
                    height: "100%",
                    minWidth: "100%",
                  }}
                />
              </Grid>
            );
          });
        })}
      </Grid>
    </>
  );
};
