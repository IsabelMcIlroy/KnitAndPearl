import { useState } from "react";
import { Drawer, IconButton, Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { sideNavClosed, palette } from "../../../assets/theme";
import { ColorPicker } from "./ColorPicker";
import { EditDrawerButtonsAndPopover } from "./EditDrawerButtonsAndPopovers";

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

          <EditDrawerButtonsAndPopover popoverText={"Undo."} />
          <EditDrawerButtonsAndPopover popoverText={"Clear Grid."} />
          <EditDrawerButtonsAndPopover popoverText={"Save."} />
          <EditDrawerButtonsAndPopover popoverText={"Exit."} />
        </Box>
      </Drawer>
    </Box>
  );
};
