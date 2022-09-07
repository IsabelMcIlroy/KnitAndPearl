import { useState } from "react";
import { Drawer, IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { sideNavClosed, palette } from "../../assets/theme";
import { NewProjectEditorDrawerFillings } from "./NewProjectEditorDrawerFillings";

export const NewProjectEditorDrawer = ({
  currentProjectNameForDrawer,
  currentProjectTypeForDrawer,
  currentlySelectedColor,
  setCurrentlySelectedColor,
  setBackground,
  defaultColor,
  gridArray,
}) => {
  const [isDrawerOpen, setIsDrawerOpened] = useState(false);
  return (
    <Box>
      <Box style={sideNavClosed} sx={{ display: { md: "block", lg: "none" } }}>
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
        sx={{
          display: { md: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor: palette.knittingGray,
            width: "300px",
          },
        }}
      >
        <NewProjectEditorDrawerFillings
          currentProjectNameForDrawer={currentProjectNameForDrawer}
          currentProjectTypeForDrawer={currentProjectTypeForDrawer}
          currentlySelectedColor={currentlySelectedColor}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
          setBackground={setBackground}
          defaultColor={defaultColor}
          gridArray={gridArray}
        />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: palette.knittingGray,
            width: "300px",
            height: "500px",
            marginLeft: "24px",
            borderBottom: "4px solid",
            borderBottomColor: palette.knittingPurple,
          },
        }}
      >
        <NewProjectEditorDrawerFillings
          currentProjectNameForDrawer={currentProjectNameForDrawer}
          currentProjectTypeForDrawer={currentProjectTypeForDrawer}
          currentlySelectedColor={currentlySelectedColor}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
          setBackground={setBackground}
          defaultColor={defaultColor}
          gridArray={gridArray}
        />
      </Drawer>
    </Box>
  );
};
