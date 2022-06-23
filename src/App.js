import { KnittingTitle } from "./components/KnittingTitle";
import { NewOrView } from "./components/NewOrView";
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
      <KnittingTitle />
      <NewOrView btnText={"New Project"} />
      <img src={logo} alt="ball of wool" />
      <NewOrView btnText={"View Projects"} />
    </div>
  );
};

export default App;
