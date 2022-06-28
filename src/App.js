import { Title } from "./components/Title.js";
import { WelcomePageOptionButtons } from "./components/WelcomePageOptionButtons";
import wool from "./images/wool.jpg";
import { Logo } from "./components/Logo";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${wool})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        style={{
          textAlign: "center",
          paddingTop: "100px",
        }}
      >
        <Title titleText={"Knitting Project Manager"} />
        <WelcomePageOptionButtons btnText={"New Project"} />
        <Logo />
        <WelcomePageOptionButtons btnText={"View Projects"} />
      </Box>
    </Box>
  );
};

export default App;
