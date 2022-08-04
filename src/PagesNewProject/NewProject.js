import { useLocation } from "react-router-dom";
import { useState } from "react";
import _ from "lodash";
import { Grid, Box, Button } from "@mui/material";
import { NewProjectEditorDrawer } from "./HelperComponents/NewProjectEditorDrawer";

export const NewProject = () => {
  const { state } = useLocation();
  const {
    currentProjectName,
    currentProjectType,
    currentRows,
    currentColumns,
  } = state;
  const [background, setBackground] = useState("#e9e1ec");
  const setKnittingGridColor = (background) => {
    setBackground(background);
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <NewProjectEditorDrawer
        currentProjectNameForDrawer={currentProjectName || "---"}
        currentProjectTypeForDrawer={currentProjectType || "---"}
      />
      <Grid
        container
        spacing={12 / currentRows}
        sx={{
          margin: "112px 80px 0px 80px",
          justifyContent: "center",
        }}
      >
        {_.range(currentRows * currentColumns, 0).map((value) => (
          <Grid
            item
            key={value}
            value={value}
            xs={12 / currentRows}
            sx={{
              border: "1px solid black",
              height: "50px",
            }}
          >
            <Button
              value={value}
              sx={{
                backgroundColor: `${background}`,
                height: "100%",
                minWidth: "90%",
              }}
              onClick={() => setKnittingGridColor("#000000")}
            />
          </Grid>
        ))}
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
    </Box>
  );
};