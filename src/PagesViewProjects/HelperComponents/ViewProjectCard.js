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
          width: "min-content",
          margin: "12px",
        }}
      >
        <CardContent>
          <img
            src={exampleImg}
            alt="example"
            style={{ maxWidth: "90%", margin: "8px" }}
          />
          <Box sx={{ margin: "8px", maxWidth: "90%" }}>
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
