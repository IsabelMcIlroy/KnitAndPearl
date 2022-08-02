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
        currentProjectNameForDrawer={currentProjectName || "---"}
        currentProjectTypeForDrawer={currentProjectType || "---"}
      />
      <Grid
        container
        spacing={12 / currentRows}
        sx={{ margin: "112px 80px 24px 80px", justifyContent: "center" }}
      >
        {_.range(currentRows * currentColumns, 0).map((value) => (
          <Grid
            item
            key={value}
            value={value}
            xs={12 / currentRows}
            sx={{ border: "1px solid black", height: "50px" }}
          >
            {value}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
