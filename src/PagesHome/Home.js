import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Title } from "../HelperComponents/title";
import { WelcomePageOptionButtons } from "./HelperComponents/WelcomePageOptionButtons";
import wool from "../images/wool.jpg";
import { Logo } from "../HelperComponents/logo";
import { NewProjectSizeAndColourSelectionModal } from "../HelperComponents/NewProjectSizeAndColourSelectionModal";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      sx={{
        backgroundImage: `url(${wool})`,
        minHeight: "100vh",
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
        <Title titleText={"Knit & Pearl"} />

        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
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

          <Logo />
          <Link
            to="/KnittingProjectManager/ViewProject"
            style={{ textDecoration: "none" }}
          >
            <WelcomePageOptionButtons btnText={"View Projects"} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
