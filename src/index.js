import { useState } from "react";
import "./index.css";
import { render } from "react-dom";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Box from "@mui/material/Box";

import { Title } from "./components/title";
import { WelcomePageOptionButtons } from "./components/WelcomePageOptionButtons";
import wool from "./images/wool.jpg";
import { Logo } from "./components/logo";
import { NewProject } from "./NewProject";
import { NewProjectSizeAndColourSelectionModal } from "./components/NewProjectSizeAndColourSelectionModal";
import { ViewProject } from "./ViewProject";

export const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      sx={{
        backgroundImage: `url(${wool})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          paddingTop: "100px",
        }}
      >
        <Title titleText={"Knitting Project Manager"} />
        <h1>Hello</h1>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <WelcomePageOptionButtons
            btnText={"New Project"}
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
        </Box>
      </Box>
    </Box>
  );
};

const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <Routes>
      <Route
        path="/KnittingProjectManager/NewProject"
        element={<NewProject />}
      />
      <Route
        path="/KnittingProjectManager/ViewProject"
        element={<ViewProject />}
      />
      <Route path="/KnittingProjectManager/" element={<Index />} />
    </Routes>
  </HashRouter>,
  rootElement
);
