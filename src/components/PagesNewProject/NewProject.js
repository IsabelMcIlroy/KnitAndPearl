import { useLocation } from "react-router-dom";
import _ from "lodash";
import { Grid, Box } from "@mui/material";
import { NewProjectEditorDrawer } from "./HelperComponents/NewProjectEditorDrawer";

export const NewProject = () => {
  const { state } = useLocation();
  const {
    currentProjectName,
    currentProjectType,
    currentRows,
    currentColumns,
  } = state;
  console.log(currentRows);
  console.log(currentColumns);
  return (
    <Box sx={{ display: "flex" }}>
      <NewProjectEditorDrawer
        currentProjectNameForDrawer={currentProjectName}
        currentProjectTypeForDrawer={currentProjectType || "---"}
      />
      {_.range(0, currentColumns).map((value) => (
        <Grid
          container
          key={value}
          value={value}
          spacing={currentRows}
          sx={{ marginTop: "150px", marginLeft: "100px" }}
        >
          {_.range(0, currentRows).map((value) => (
            <Grid
              item
              key={value}
              value={value}
              xs={currentRows / 12}
              sx={{ border: "1px solid black", height: "50px" }}
            ></Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
};
