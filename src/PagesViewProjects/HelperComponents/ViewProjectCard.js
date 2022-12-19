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
import KnittingTheme, { palette } from "../../assets/theme";
import { MiniProjectGrid } from "./MiniProjectGrid";

export const ViewProjectCard = ({
  projectName,
  projectType,
  projectID,
  currentRows,
  currentColumns,
  gridColours,
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
                  onClick={() =>
                    navigate(`/KnitAndPearl/ViewProjects/${projectID}`, {
                      state: {
                        projectID: projectID,
                        currentProjectName: projectName,
                        currentProjectType: projectType,
                        currentRows: currentRows,
                        currentColumns: currentColumns,
                        gridColours: gridColours,
                      },
                    })
                  }
                >
                  View/Edit
                </Button>
              </ThemeProvider>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
