import { useState } from "react";
import { Drawer, IconButton, Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {
  sideNavClosed,
  palette,
  editorDrawerProjectNames,
  editorDrawerLabels,
} from "../../assets/theme";
import { ColorPicker } from "./ColorPicker";
import { EditDrawerButtonsAndPopover } from "./EditDrawerButtonsAndPopovers";
import woolSmall from "../../images/woolSmall.jpg";

export const NewProjectEditorDrawer = ({
  currentProjectNameForDrawer,
  currentProjectTypeForDrawer,
  currentlySelectedColor,
  setCurrentlySelectedColor,
}) => {
  const [isDrawerOpen, setIsDrawerOpened] = useState(false);
  return (
    <Box>
      <Box style={sideNavClosed}>
        <IconButton
          onClick={() => {
            setIsDrawerOpened(true);
          }}
        >
          {!isDrawerOpen && <EditIcon />}
        </IconButton>
      </Box>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpened(false);
        }}
        PaperProps={{
          sx: { backgroundColor: palette.knittingGray, width: "300px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            backgroundColor: palette.knittingLightBlue,
            paddingTop: "28px",
            fontFamily: "La Belle Aurore",
            textAlign: "center",
            color: palette.knittingPurple,
          }}
        >
          Edit Project
          <EditIcon />
        </Typography>
        <Box sx={{ margin: "24px" }}>
          <Box sx={{ display: "flex", paddingTop: "12px" }}>
            <Typography variant="h8" sx={editorDrawerLabels}>
              Project Name:
            </Typography>
            <Typography variant="h4" sx={editorDrawerProjectNames}>
              {currentProjectNameForDrawer || "---"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h8" sx={editorDrawerLabels}>
              Project Type:
            </Typography>
            <Typography variant="h4" sx={editorDrawerProjectNames}>
              {currentProjectTypeForDrawer || "---"}
            </Typography>
          </Box>
          <hr sx={editorDrawerLabels} />
          <Typography variant="h8" sx={editorDrawerLabels}>
            Wool Color:
          </Typography>
          <ColorPicker
            currentlySelectedColor={currentlySelectedColor}
            setCurrentlySelectedColor={setCurrentlySelectedColor}
          />
          <hr sx={editorDrawerLabels} />
          <Box sx={{ textAlign: "center", marginTop: "24px" }}>
            <EditDrawerButtonsAndPopover popoverText={"Undo."} />
            <EditDrawerButtonsAndPopover popoverText={"Clear Grid."} />
            <EditDrawerButtonsAndPopover popoverText={"Save."} />
            <EditDrawerButtonsAndPopover popoverText={"Exit."} />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: palette.knittingLightBlue,
            height: "100vh",
            backgroundImage: `url(${woolSmall})`,
            marginTop: "12px",
          }}
        />
      </Drawer>
    </Box>
  );
};
