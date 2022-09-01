import { useState } from "react";
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
import { MockGrid } from "../MockData/MockGrid";

export const ViewProjectCard = ({ projectName, projectType }) => {
  const navigate = useNavigate();
  const DEFAULT_COLOR = "#E8E1EC";
  const [background] = useState(DEFAULT_COLOR);
  const mockColumns = 6;
  const mockRows = 6;
  const gridArray = Array(parseInt(mockColumns))
    .fill(0)
    .map(() => new Array(parseInt(mockRows)).fill(background));
  return (
    <>
      <Card
        sx={{
          width: "min-content",
          margin: "12px",
        }}
      >
        <CardContent>
          <MockGrid gridArray={gridArray} />
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
                    navigate("/KnittingProjectManager/MockProject", {
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
