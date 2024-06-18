import NewsProject from './NewsProject'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import NewsProduct from './NewsProduct'
import { createContext,useState } from 'react';
import React from 'react'


export const Current1 = createContext();
function News() {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      setCart([...cart, product]);
    };
    
  return (
    <div>
         <Current1.Provider value={{cart, addToCart}}>
           <BrowserRouter>
             <Routes>
               <Route path="/" Component={NewsProject}/>
               <Route path="/newsproduct" Component={NewsProduct}/>
            </Routes>
           </BrowserRouter>
         </Current1.Provider>


    </div>
  )
}

export default News