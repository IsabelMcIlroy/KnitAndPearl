import React from "react";
import { Link } from "react-router-dom";

import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import wool from "./images/wool.jpg";

import { WelcomePageOptionButtons } from "./components/WelcomePageOptionButtons";
import { Logo } from "./components/Logo";
import { NewProjectSizeAndColourSelectionModal } from "./components/NewProjectSizeAndColourSelectionModal";

export const ViewProject = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar
        postion="sticky"
        sx={{ backgroundImage: `url(${wool})`, padding: "10px" }}
      >
        <Toolbar>
          <Grid container direction="row" justifyContent="flex-end">
            <WelcomePageOptionButtons
              btnText="New Project"
              onClick={handleOpen}
            />
            <NewProjectSizeAndColourSelectionModal
              open={open}
              onClose={handleClose}
            />
            <Link to="/">
              <Logo />
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
