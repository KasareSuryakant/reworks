import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products';
import DetailProduct from './pages/DetailProduct';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Login from './pages/Login'
import Cart from './pages/Cart'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
