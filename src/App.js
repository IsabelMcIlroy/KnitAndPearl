import { KnittingTitle } from "./components/KnittingTitle";
import { NewOrView } from "./components/NewOrView";
import wool from "./images/wool.jpg";

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
      <NewOrView btnText={"new"} />
      <NewOrView btnText={"view"} />
    </div>
  );
};

export default App;
