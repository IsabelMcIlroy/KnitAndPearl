import React from "react";
import "./index.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Box from "@mui/material/Box";

import { Title } from "./components/Title.js";
import { WelcomePageOptionButtons } from "./components/WelcomePageOptionButtons";
import wool from "./images/wool.jpg";
import { Logo } from "./components/Logo";
import { NewProject } from "./NewProject.js";
import { NewProjectSizeAndColourSelectionModal } from "./components/NewProjectSizeAndColourSelectionModal";

const Index = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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

        <WelcomePageOptionButtons
          btnText={"New Project"}
          onClick={handleOpen}
        />
        <NewProjectSizeAndColourSelectionModal
          open={open}
          onClose={handleClose}
        />

        <Logo />
        <Link to="/ViewProject">
          <WelcomePageOptionButtons btnText={"View Projects"} />
        </Link>
      </Box>
    </Box>
  );
};

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/NewProject" element={<NewProject />} />
      <Route path="/ViewProject" element={<NewProject />} />
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
