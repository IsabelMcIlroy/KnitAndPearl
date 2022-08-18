import { Box, Typography } from "@mui/material";
import { palette } from "../assets/theme";
import { ViewProjectCard } from "./HelperComponents/ViewProjectCard";

export const ViewProject = () => {
  return (
    <Box
      sx={{
        backgroundColor: palette.knittingGray,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: "112px 24px 12px 24px",
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
        <Box
          sx={{
            display: "flex",
            margin: "0px 24px",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <ViewProjectCard projectName={"Trees"} projectType={"Sweater"} />
          <ViewProjectCard projectName={"Mountains"} projectType={"Scarf"} />
          <ViewProjectCard projectName={"Cats"} projectType={"Socks"} />
          <ViewProjectCard projectName={"Fish"} projectType={"Socks"} />
        </Box>
      </Box>
    </Box>
  );
};
