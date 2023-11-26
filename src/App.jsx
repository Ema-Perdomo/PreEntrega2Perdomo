import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/NavBar'


function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Insumos deportivos'/>
    </>
  )
}

export default App
