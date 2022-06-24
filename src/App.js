import { Title } from "./components/title.js";
import { WelcomePageOptionButtons } from "./components/WelcomePageOptionButtons";
import wool from "./images/wool.jpg";
import { Logo } from "./components/logo";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${wool})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          textAlign: "center",
          paddingTop: "100px",
        }}
      >
        <Title titleText={"Knitting Project Manager"} />
        <WelcomePageOptionButtons btnText={"New Project"} />
        <Logo />
        <WelcomePageOptionButtons btnText={"View Projects"} />
      </div>
    </div>
  );
};

export default App;
