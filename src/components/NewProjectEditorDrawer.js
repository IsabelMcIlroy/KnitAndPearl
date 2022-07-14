import { useState } from "react";
import { Drawer, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import KnittingTheme, { sideNavClosed, palette } from "../assets/theme";

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
          }}
        >
          {isDrawerOpened ? <EditIcon /> : null}
        </IconButton>
      </div>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={closeDrawer}
        style={KnittingTheme}
        PaperProps={{
          sx: { backgroundColor: palette.knittingGray, width: "300px" },
        }}
      >
        <Typography variant="p">projectName</Typography>
      </Drawer>
    </div>
  );
};
