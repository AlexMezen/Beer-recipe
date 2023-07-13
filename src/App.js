import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Product from './Product';
import Products from './Products';



function App() {
  return (

    <div className="App">
       <BrowserRouter>

        <Routes>
          <Route path="/" element={<Products />} />  
          <Route path="/:id" element={<Product />} />  
        </Routes>
        <Outlet />
        </BrowserRouter> 
    </div>
  );
}

export default App;