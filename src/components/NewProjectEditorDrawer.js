import React from "react";
import { Drawer } from "@mui/material";

const styles = {
  sideNav: {
    marginTop: "-60px",
    zIndex: 3,
    marginLeft: "0px",
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
          <p onClick={this.toggleDrawerStatus}>
            {!isDrawerOpened ? ">" : null}
          </p>
        </div>
        <Drawer>
          <p>Hello</p>
          <p>World</p>
        </Drawer>
      </div>
    );
  }
}
