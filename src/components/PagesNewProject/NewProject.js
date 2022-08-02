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
      <Grid container spacing={currentRows} sx={{ margin: "150px 75px" }}>
        {_.range(currentRows, 0).map((value) => (
          <Grid
            item
            key={value}
            value={value}
            xs={currentRows / 12}
            sx={{ border: "1px solid black", height: "50px" }}
          >
            {value}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
