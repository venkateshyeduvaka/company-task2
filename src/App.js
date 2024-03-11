import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import Product from './pages/Product';

const App = () => {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>
    </div>
  )
}

export default App
