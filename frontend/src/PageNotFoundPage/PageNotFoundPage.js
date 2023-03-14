import { Typography, Box } from "@mui/material";
import tangledYarn from "../assets/images/TangledYarns.png";
import { palette } from "../assets/theme";

export const PageNotFoundPage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F5F5F5" }}>
        <Box
          sx={{
            padding: "112px 24px 12px 24px",
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${tangledYarn})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Typography
            sx={{
              color: palette.knittingPurple,
            }}
            variant="h3"
          >
            Sorry, our yarns seems to have crossed!
          </Typography>
          <Typography>Please try another page.</Typography>
        </Box>
      </Box>
    </>
  );
};
