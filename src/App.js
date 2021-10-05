import './App.css';
import { AppRoutes } from './Routes/AppRoutes';
import { ItemContext } from './context/ItemContext';
import {useState} from 'react';

function App() {

  const [cart, setCart] = useState([]);
  return(
    <>
      <ItemContext.Provider value = {{cart, setCart}}>
        <AppRoutes/>
      </ItemContext.Provider>
    
    </>
  )
}

export default App;
