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
        marginTop: "-21px",
      }}
    >
      <h1>Knitting Project Manager</h1>
      <WelcomePageOptionButtons btnText={"New Project"} />
      <img src={logo} alt="ball of wool" />
      <WelcomePageOptionButtons btnText={"View Projects"} />
    </div>
  );
};

export default App;
