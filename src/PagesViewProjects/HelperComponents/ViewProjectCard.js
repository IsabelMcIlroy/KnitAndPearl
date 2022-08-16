import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  ThemeProvider,
} from "@mui/material";
import KnittingTheme, { palette } from "../../assets/theme";
import exampleImg from "../../images/grid.jpg";

export const ViewProjectCard = ({ projectName, projectType }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: "40vw",
          margin: "12px",
        }}
      >
        <CardContent sx={{ display: "flex", flexWrap: "wrap" }}>
          <img
            src={exampleImg}
            alt="example"
            style={{ maxWidth: "50%", margin: "8px" }}
          />
          <Box sx={{ margin: "8px", maxWidth: "50%" }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontFamily: "La Belle Aurore",
                color: palette.knittingPurple,
                margin: "0 24px",
              }}
            >
              {projectName}
            </Typography>
            <Typography
              variant="p"
              sx={{
                margin: "0 24px",
                color: palette.knittingLightPurple,
              }}
            >
              {projectType}
            </Typography>
            <CardActions sx={{ padding: "0" }}>
              <ThemeProvider theme={KnittingTheme}>
                <Button size="small">View</Button>
              </ThemeProvider>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
