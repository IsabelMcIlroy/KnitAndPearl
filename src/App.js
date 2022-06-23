import { Title } from "./components/title.js";
import { WelcomePageOptionButtons } from "./components/WelcomePageOptionButtons";
import wool from "./images/wool.jpg";
import logo from "./images/logo.png";

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
      <div style={{ paddingLeft: "30%", paddingTop: "10%" }}>
        <Title titleText={"Knitting Project Manager"} />
        <WelcomePageOptionButtons btnText={"New Project"} />
        <img src={logo} alt="ball of wool" />
        <WelcomePageOptionButtons btnText={"View Projects"} />
      </div>
    </div>
  );
};

export default App;
