import { useState } from "react";
import { Drawer, IconButton, Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { sideNavClosed, palette } from "../../../assets/theme";
import { ColorPicker } from "./ColorPicker";

export const NewProjectEditorDrawer = ({
  currentProjectNameForDrawer,
  currentProjectTypeForDrawer,
}) => {
  const [isOpen, isDrawerOpened] = useState(false);
  const closeDrawer = () => {
    isDrawerOpened(false);
  };
  return (
    <div>
      <div style={sideNavClosed}>
        <IconButton
          onClick={() => {
            isDrawerOpened(true);
          }}
        >
          {isDrawerOpened && <EditIcon />}
        </IconButton>
      </div>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: { backgroundColor: palette.knittingGray, width: "300px" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            backgroundColor: palette.knittingLightBlue,
            paddingTop: "24px",
            fontFamily: "La Belle Aurore",
            textAlign: "center",
            color: palette.knittingPurple,
          }}
        >
          Edit Project
          <EditIcon />
        </Typography>
        <Box sx={{ margin: "24px" }}>
          <Typography variant="h8">Project Name:</Typography>
          <Typography variant="h4" sx={{ margin: "12px" }}>
            {currentProjectNameForDrawer}
          </Typography>
          <Typography variant="h8">Project Type:</Typography>
          <Typography variant="h6" sx={{ margin: "12px" }}>
            {currentProjectTypeForDrawer}
          </Typography>
          <Typography variant="h8">Color:</Typography>
          <ColorPicker />
        </Box>
      </Drawer>
    </div>
  );
};
