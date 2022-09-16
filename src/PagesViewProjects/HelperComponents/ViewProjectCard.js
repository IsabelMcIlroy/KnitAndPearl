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
import { MiniProjectGrid } from "../ProjectData/MiniProjectGrid";
import {
  treesGrid,
  mountainsGrid,
  catsGrid,
  fishGrid,
} from "../ProjectData/ProjectData";

export const ViewProjectCard = ({ projectName, projectType }) => {
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
          {projectName === "Trees" && (
            <MiniProjectGrid grid={treesGrid} currentColumns={7} />
          )}
          {projectName === "Mountains" && (
            <MiniProjectGrid grid={mountainsGrid} currentColumns={9} />
          )}
          {projectName === "Cats" && (
            <MiniProjectGrid grid={catsGrid} currentColumns={7} />
          )}
          {projectName === "Fish" && (
            <MiniProjectGrid grid={fishGrid} currentColumns={9} />
          )}
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
                    navigate(`/KnittingProjectManager/${projectName}Project`, {
                      state: {
                        currentProjectName: projectName,
                        currentProjectType: projectType,
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
