import { useState } from "react";
import "../index.css";
import Box from "@mui/material/Box";
import { Title } from "../HelperComponents/title";
import { WelcomePageOptionButtons } from "./HelperComponents/WelcomePageOptionButtons";
import wool from "../images/wool.jpg";
import { Logo } from "../HelperComponents/logo";
import { LoginModal } from "./HelperComponents/LoginModal";
import { SignupModal } from "./HelperComponents/SignupModal";

export const Home = () => {
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
            backgroundColor: "rgba(232, 225, 236, 0.7)",
            borderRadius: "36px",
            padding: "12%",
          }}
        >
          <Title titleText={"Knit & Pearl"} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
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
