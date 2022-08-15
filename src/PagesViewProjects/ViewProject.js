import { Box, Typography } from "@mui/material";
import { palette } from "../assets/theme";
import { ViewProjectCard } from "./HelperComponents/ViewProjectCard";

export const ViewProject = () => {
  return (
    <Box
      sx={{
        padding: "112px 24px 0 24px",
        backgroundColor: palette.knittingGray,
        height: "100vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "La Belle Aurore",
          color: palette.knittingPurple,
          margin: "0 24px",
        }}
      >
        View Projects
      </Typography>
      <Box sx={{ display: "flex", margin: "0px 24px" }}>
        <ViewProjectCard projectName={"Trees"} projectType={"Sweater"} />
        <ViewProjectCard projectName={"Mountains"} projectType={"Scarf"} />
      </Box>
      <Box sx={{ display: "flex", margin: "0px 24px" }}>
        <ViewProjectCard projectName={"Cats"} projectType={"Socks"} />
        <ViewProjectCard projectName={"Fish"} projectType={"Socks"} />
      </Box>
    </Box>
  );
};
