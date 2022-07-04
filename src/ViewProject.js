import React from "react";
import { Link } from "react-router-dom";

import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import wool from "./images/wool.jpg";

import { WelcomePageOptionButtons } from "./components/WelcomePageOptionButtons";
import { Logo } from "./components/Logo";

export const ViewProject = () => {
  return (
    <>
      <AppBar
        postion="sticky"
        sx={{ backgroundImage: `url(${wool})`, padding: "10px" }}
      >
        <Toolbar>
          <Grid container direction="row" justifyContent="flex-end">
            <WelcomePageOptionButtons btnText="New Project" />
            <Link to="/">
              <Logo />
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
