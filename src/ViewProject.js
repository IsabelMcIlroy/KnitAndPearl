import { useState } from "react";
import { Link } from "react-router-dom";

import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import wool from "./images/wool.jpg";

import { WelcomePageOptionButtons } from "./components/WelcomePageOptionButtons";
import { Logo } from "./components/Logo";
import { NewProjectSizeAndColourSelectionModal } from "./components/NewProjectSizeAndColourSelectionModal";

export const ViewProject = () => {
  const [isOpen, setIsOpen] = useState(false);
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
              onClick={() => {
                setIsOpen(true);
              }}
            />
            <NewProjectSizeAndColourSelectionModal
              open={isOpen}
              closeModal={setIsOpen}
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
