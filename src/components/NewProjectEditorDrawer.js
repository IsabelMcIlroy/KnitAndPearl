import { useState } from "react";
import { Drawer, IconButton, Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { sideNavClosed, palette } from "../assets/theme";
import { NewProjectSizeAndColourSelectionModal } from "./NewProjectSizeAndColourSelectionModal";

export const NewProjectEditorDrawer = () => {
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
            console.log(
              NewProjectSizeAndColourSelectionModal.currentProjectName
            );
            console.log(
              NewProjectSizeAndColourSelectionModal.currentProjectType
            );
          }}
        >
          {isDrawerOpened ? <EditIcon /> : null}
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
        <Box sx={{ margin: "24px auto" }}>
          <Typography variant="h4" sx={{ margin: "12px" }}>
            {NewProjectSizeAndColourSelectionModal.currentProjectName}
          </Typography>
          <Typography variant="h6" sx={{ margin: "12px" }}>
            projectType
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
};
