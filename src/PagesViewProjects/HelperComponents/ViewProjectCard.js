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
import { MiniMockGrid } from "../MockData/MiniMockGrid";

export const ViewProjectCard = ({ projectName, projectType }) => {
  const navigate = useNavigate();
  const DEFAULT_COLOR = "#E8E1EC";
  const [background] = useState(DEFAULT_COLOR);
  const mockColumns = 6;
  const mockRows = 6;
  const gridArray = [
    ["#006B76", "#006B76", "#006B76", "#006B76", "#008B02", "#008B02"],
    ["#006B76", "#006B76", "#006B76", "#008B02", "#008B02", "#C1E1C5"],
    ["#006B76", "#006B76", "#008B02", "#008B02", "#C1E1C5", "#C1E1C5"],
    ["#006B76", "#006B76", "#008B02", "#008B02", "#C1E1C5", "#C1E1C5"],
    ["#006B76", "#006B76", "#006B76", "#008B02", "#008B02", "#C1E1C5"],
    ["#006B76", "#006B76", "#006B76", "#006B76", "#008B02", "#008B02"],
  ];
  return (
    <>
      <Card
        sx={{
          width: "min-content",
          margin: "12px",
        }}
      >
        <CardContent>
          <MiniMockGrid gridArray={gridArray} />
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
