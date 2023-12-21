import Navbar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/NavBar'
import Item from './components/Item/Item'
import error from ''

//import ItemCount from './components/ItemCount'
// import Hero from './components/Hero/Hero.jsx'


function App() {

  return (
    
      <BrowserRouter>        
        <NavBar/>

        <Routes>
            <Route path='/' element={ <ItemListContainer greeting='Insumos deportivos'/> } />
            
            <Route path='/category/:id' element={ <ItemDetailContainer /> } />
            <Route path='/gym' element={gym}>
            <Route path='/deportes'/>
            <Route path='/indumentaria'/>
            <Route path='/cart' element={CartWidget}>
            {/* Error */}
            <Route path='*'element={ <error/> }></Route>
          
        </Routes>
      </BrowserRouter>   


      
      


      <Item title='Producto 1' price={10} img='https://www.tushop.uy/imgs/productos/productos34_1918.jpg'>
        <p></p>

      </Item>

      {/* <ItemCount/> */}
      {/* <ItemList/> */}
      
      
    </>
  )
}

export default App;
