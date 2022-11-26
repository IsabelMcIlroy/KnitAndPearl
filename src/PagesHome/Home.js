import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Box from "@mui/material/Box";
import { Title } from "../HelperComponents/title";
import { WelcomePageOptionButtons } from "./HelperComponents/WelcomePageOptionButtons";
import wool from "../images/wool.jpg";
import { Logo } from "../HelperComponents/logo";
import { LoginModal } from "./HelperComponents/LoginModal";
import { SignupModal } from "./HelperComponents/SignupModal";

export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
      navigate("/KnitAndPearl/ViewProject", {});
    }
  }, []);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(232, 225, 236, 0.8)",
            borderRadius: "36px",
            padding: "12%",
          }}
        >
          <Title titleText={"Knit & Pearl"} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <WelcomePageOptionButtons
              btnText={"Login"}
              onClick={() => {
                setIsLoginOpen(true);
              }}
            />
            <LoginModal
              open={isLoginOpen}
              setIsLoginOpen={setIsLoginOpen}
              setIsSignupOpen={setIsSignupOpen}
            />

            <Logo />
            <WelcomePageOptionButtons
              btnText={"Signup"}
              onClick={() => {
                setIsSignupOpen(true);
              }}
            />
            <SignupModal
              open={isSignupOpen}
              setIsSignupOpen={setIsSignupOpen}
              setIsLoginOpen={setIsLoginOpen}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
