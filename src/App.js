import './App.css';
import { AppRoutes } from './Routes/AppRoutes';
import { ItemContext } from './context/ItemContext';
import {useState} from 'react';
import { CartContext } from './context/CartContext';

function App() {

  const [cart, setCart] = useState([]);
  const [cart2, setCart2] = useState([]);

  return(
    <>
      <ItemContext.Provider value = {{cart, setCart}}>
        <CartContext.Provider value = {{cart2, setCart2}}>
          <AppRoutes/>
        </CartContext.Provider>
      </ItemContext.Provider>
    
    </>
  )
}

export default App;
