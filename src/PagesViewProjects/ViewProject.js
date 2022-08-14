import { Box } from "@mui/system";
import { ViewProjectCard } from "./HelperComponents/ViewProjectCard";

export const ViewProject = () => {
  return (
    <Box sx={{ paddingTop: "98px", margin: "0 24px" }}>
      <h1>View Projects</h1>
      <Box sx={{ display: "flex", margin: "0 24px" }}>
        <ViewProjectCard projectName={"Trees"} projectType={"Sweater"} />
        <ViewProjectCard projectName={"Mountains"} projectType={"Scarf"} />
      </Box>
    </Box>
  );
};
