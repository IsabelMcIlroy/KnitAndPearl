import { useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import { Grid, Button } from "@mui/material";

export const ProjectGrid = () => {
  const { state } = useLocation();
  const { currentRows, currentColumns } = state;
  const gridArray = Array(
    ...Array(parseInt(currentRows * currentColumns)).keys()
  );
  const [background, setBackground] = useState("#e9e1ec");
  const setKnittingGridColor = (background) => {
    for (let i = 0; i < gridArray.length; i++) {
      gridArray[i] = setBackground(background);
    }
  };
  const handleChangeColor = (index) => {
    gridArray[index] = setKnittingGridColor("#000000");
  };
  return (
    <>
      <Grid
        container
        spacing={12 / currentRows}
        sx={{
          margin: "112px 80px 0px 80px",
          justifyContent: "center",
        }}
      >
        {gridArray.map((index) => {
          return (
            <Grid
              item
              key={index}
              value={index}
              xs={12 / currentRows}
              sx={{
                border: "1px solid black",
                height: "50px",
              }}
            >
              <Button
                value={index}
                sx={{
                  backgroundColor: `${background}`,
                  height: "100%",
                  minWidth: "90%",
                }}
                key={index}
                onClick={() => {
                  handleChangeColor(index);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: "112px",
          marginLeft: "-4%",
          justifyContent: "end",
          position: "absolute",
          zIndex: "-10",
        }}
      >
        {_.range(currentColumns, 0).map((value) => (
          <Grid
            item
            key={value}
            value={value}
            xs={12}
            sx={{
              height: "50px",
              textAlign: "end",
            }}
          >
            {value}
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={12 / currentRows}
        sx={{ margin: "0 80px 0 80px", justifyContent: "center" }}
      >
        {_.range(currentRows, 0).map((value) => (
          <Grid
            item
            key={value}
            value={value}
            xs={12 / currentRows}
            sx={{
              height: "50px",
              textAlign: "center",
            }}
          >
            {value}
          </Grid>
        ))}
      </Grid>
    </>
  );
};
