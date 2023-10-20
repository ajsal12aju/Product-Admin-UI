import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Componets/login/Login';
import Home from './Componets/home/Home';
import Product from './Componets/products/products'

const AppRouter = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
  
  );
};

export default AppRouter;
