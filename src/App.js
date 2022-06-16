import KnittingTitle from './KnittingTitle'
import NewOrView from './NewOrView'

const App = () => {
  return (
    <>
      <KnittingTitle />
      <NewOrView Title="New Project" Button="New" />
      <NewOrView Title="View Projects" Button="View" />
    </>
  )
}

export default App;
