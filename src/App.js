import KnittingTitle from './KnittingTitle'
import NewOrView from './NewOrView'
import wool from "./images/wool.jpg"

const App = () => {
  return (
    <div styles={{backgroundImage:`url(${wool})`,
    height: '100px',
    width: '100px'}}>
      <KnittingTitle />
      <NewOrView Title="New Project" Button="New" />
      <NewOrView Title="View Projects" Button="View" />
    </div>
  )
}

export default App;
