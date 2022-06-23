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
      <NewOrView Title="New Project" Button="New" />
      <NewOrView Title="View Projects" Button="View" />
    </div>
  );
};

export default App;
