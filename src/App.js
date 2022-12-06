import React from 'react'
import CartState from "./context/CartState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import "./App.css"
import Headphones from './Components/Category/Headphones';
import Keyboards from './Components/Category/Keyboards';


export default function App() {
  return (
    <>
      <CartState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/keyboards" element={<Keyboards />} />
          </Routes>
        </BrowserRouter>
      </CartState>
    </>
  );
}