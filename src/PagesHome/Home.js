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
          padding: "4% 12%",
          height: "86vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(232, 225, 236, 0.85)",
            borderRadius: "36px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Box>
            <Title titleText={"Knit & Pearl"} />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
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
    </Box>
  );
};
