import React from "react";
import Header from "./componentes/Header/Header";
import Productos from "./componentes/Productos/Productos";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./componentes/ProductDetail/ProductDetail";
import Cart from "./componentes/Cart/Cart";
import Footer from "./componentes/Footer/Footer";
import Login from "./componentes/Login/Login";

function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path="/" element={<Productos/>}/>
        <Route path="/:id" element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
