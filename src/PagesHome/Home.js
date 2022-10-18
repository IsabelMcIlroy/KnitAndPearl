import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Title } from "../HelperComponents/title";
import { WelcomePageOptionButtons } from "./HelperComponents/WelcomePageOptionButtons";
import wool from "../images/wool.jpg";
import { Logo } from "../HelperComponents/logo";
import { NewProjectSizeAndColourSelectionModal } from "../HelperComponents/NewProjectSizeAndColourSelectionModal";
import { LoginModal } from "./HelperComponents/LoginModal";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
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
        <Title titleText={"Knitting Project Manager"} />

        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {isLogin === true && (
            <WelcomePageOptionButtons
              btnText={"New Project"}
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
          <NewProjectSizeAndColourSelectionModal
            open={isOpen}
            setIsOpen={setIsOpen}
          />

          {isLogin === false && (
            <Logo
              onClick={() => {
                setIsLoginOpen(true);
              }}
            />
          )}
          <LoginModal
            open={isLoginOpen}
            setIsOpen={setIsLoginOpen}
            isLogin={setIsLogin}
          />

          {isLogin === true && <Logo />}

          {isLogin === true && (
            <Link
              to="/KnittingProjectManager/ViewProject"
              style={{ textDecoration: "none" }}
            >
              <WelcomePageOptionButtons btnText={"View Projects"} />
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};
