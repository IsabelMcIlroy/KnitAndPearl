import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  ThemeProvider,
} from "@mui/material";
import KnittingTheme, { palette } from "../../../assets/theme";
import { MiniProjectGrid } from "./MiniProjectGrid";

export const ViewProjectCard = ({
  projectName,
  projectType,
  projectID,
  currentColumns,
  gridColours,
  user,
}) => {
  let grid = JSON.parse(gridColours);
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          width: "min-content",
          margin: "12px",
        }}
      >
        <CardContent>
          <MiniProjectGrid grid={grid} currentColumns={currentColumns} />
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
                <Button
                  size="small"
                  onClick={() => navigate(`/ViewProjects/${projectID}`, {})}
                >
                  View/Edit
                </Button>
              </ThemeProvider>
            </CardActions>
          </Box>
          <Typography
            variant="p"
            sx={{
              margin: "0 24px",
              color: palette.knittingLightPurple,
              display: "flex",
              justifyContent: "end",
            }}
          >
            {user}'s Project
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
