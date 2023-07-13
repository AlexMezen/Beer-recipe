import { create } from 'zustand'
import app from './app.module.css'
import React, { useState, useEffect } from 'react';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
const useStore = create((set) => ({
  data: [],
  fetchData: async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers?page=1')
    const dataR = await response.json()
    set({ data: dataR })
  },
}));

function App() {
  const fetchData = useStore((state) => state.fetchData)
  const data = useStore((state) => state.data)
  useEffect(() => {
    fetchData();
  }, [] );

  return (

    <div className="App">
      <button onClick={fetchData}>Submit</button>
      {data.map(el=>{
        return <div className={app.back}>
<BrowserRouter> 
    { <Routes>
        <Route path="/email" /> 
      </Routes> } 
  </BrowserRouter>  
          <h3>Name</h3>
          {el.name}
          <h3>Food pairing</h3>
          {el.food_pairing}
          <h3>Id</h3>
          {el.id}
        </div>
        })}
    </div>
  );
}

export default App;
