import React from "react";
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

export default class NewProjectEditorDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpened: false,
    };
  }
  toggleDrawerStatus = () => {
    this.setState({
      isDrawerOpened: true,
    });
  };
  closeDrawer = () => {
    this.setState({
      isDrawerOpened: false,
    });
  };
  render() {
    const { isDrawerOpened } = this.state;
    return (
      <div>
        <div style={styles.sideNav}>
          <IconButton onClick={this.toggleDrawerStatus}>
            {!isDrawerOpened ? <EditIcon /> : null}
          </IconButton>
        </div>
        <Drawer
          variant="temporary"
          open={isDrawerOpened}
          onClose={this.closeDrawer}
          style={styles.drawerStyle}
        ></Drawer>
      </div>
    );
  }
}
