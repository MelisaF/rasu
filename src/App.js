import './App.css';
import { AppRoutes } from './Routes/AppRoutes';
import { CustomProvider, ItemContext } from './context/ItemContext';
import {useState, useEffect} from 'react';


export const App= () => {

  const [cart, setCart] = useState([]);

  
  return(
    <>
      <CustomProvider>
        <ItemContext.Provider value = {{cart, setCart}}>
          <AppRoutes/>
        </ItemContext.Provider>
      </CustomProvider>
    </>
  )
}

