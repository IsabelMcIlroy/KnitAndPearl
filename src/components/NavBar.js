import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Grid } from "@mui/material";
import wool from "../images/wool.jpg";
import { WelcomePageOptionButtons } from "./WelcomePageOptionButtons";
import { Logo } from "./logo";
import { NewProjectSizeAndColourSelectionModal } from "./NewProjectSizeAndColourSelectionModal";

export const NavBar = () => {
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
              setIsOpen={setIsOpen}
            />
            <Link to="/">
              <Logo />
            </Link>
            <Link to="/ViewProject">
              <WelcomePageOptionButtons btnText={"View Projects"} />
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
