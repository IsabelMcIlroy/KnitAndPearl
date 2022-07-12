import React from "react";
import { Drawer, IconButton } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";

const styles = {
  sideNav: {
    marginTop: "80px",
    width: "20px",
    zIndex: 10,
    position: "fixed",
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
            {!isDrawerOpened ? <ReorderIcon /> : null}
          </IconButton>
        </div>
        <Drawer
          variant="temporary"
          open={isDrawerOpened}
          onClose={this.closeDrawer}
        >
          <p>Hello</p>
          <p>World</p>
        </Drawer>
      </div>
    );
  }
}
