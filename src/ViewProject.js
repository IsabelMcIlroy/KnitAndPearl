import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import wool from "./images/wool.jpg";

import { WelcomePageOptionButtons } from "./components/WelcomePageOptionButtons";
import { Logo } from "./components/Logo";

export const ViewProject = () => {
  return (
    <>
      <AppBar postion="sticky" sx={{ backgroundImage: `url(${wool})` }}>
        <Toolbar>
          <Logo />
          <WelcomePageOptionButtons btnText="New Project" />
        </Toolbar>
      </AppBar>
      <h1>Hello</h1>
    </>
  );
};
