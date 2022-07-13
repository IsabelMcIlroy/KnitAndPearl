import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const styles = {
  sideNav: {
    marginTop: "90px",
    zIndex: 10,
    position: "fixed",
    height: "100%",
    backgroundColor: "purple",
  },
  drawerStyle: {
    width: "300px",
    backgroundColor: "black",
  },
};

export const NewProjectEditorDrawer = () => {
  const [isOpen, isDrawerOpened] = useState(false);
  const closeDrawer = () => {
    isDrawerOpened(false);
  };
  return (
    <div>
      <div style={styles.sideNav}>
        <IconButton
          onClick={() => {
            isDrawerOpened(true);
          }}
        >
          {!isDrawerOpened ? <EditIcon /> : null}
        </IconButton>
      </div>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={closeDrawer}
        style={styles.drawerStyle}
      ></Drawer>
    </div>
  );
};
