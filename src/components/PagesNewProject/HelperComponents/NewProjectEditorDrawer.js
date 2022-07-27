import { useState } from "react";
import { Drawer, IconButton, Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";
import {
  sideNavClosed,
  palette,
  editBarButton,
  editBarButtonIcon,
} from "../../../assets/theme";
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
    <Box>
      <Box style={sideNavClosed}>
        <IconButton
          onClick={() => {
            isDrawerOpened(true);
          }}
        >
          {isDrawerOpened && <EditIcon />}
        </IconButton>
      </Box>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: { backgroundColor: palette.knittingGray, width: "300px" },
        }}
      >
        <Typography
          variant="h4"
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
          <Box sx={{ display: "flex" }}>
            <Typography variant="h8">Project Name:</Typography>
            <Typography variant="h6" sx={{ margin: "12px" }}>
              {currentProjectNameForDrawer}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h8">Project Type:</Typography>
            <Typography variant="h6" sx={{ margin: "12px" }}>
              {currentProjectTypeForDrawer}
            </Typography>
          </Box>
          <hr />

          <Typography variant="h8">Color:</Typography>
          <ColorPicker />

          <IconButton aria-label="Undo" sx={editBarButton}>
            <UndoRoundedIcon sx={editBarButtonIcon} />
          </IconButton>
          <IconButton aria-label="Clear Grid" sx={editBarButton}>
            <SettingsBackupRestoreRoundedIcon sx={editBarButtonIcon} />
          </IconButton>
          <IconButton aria-label="Save" sx={editBarButton}>
            <SaveRoundedIcon sx={editBarButtonIcon} />
          </IconButton>
          <IconButton aria-label="Exit Project" sx={editBarButton}>
            <ExitToAppRoundedIcon sx={editBarButtonIcon} />
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
};
