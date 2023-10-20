import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Componets/login/Login';
import Home from './Componets/home/Home';
import Product from './Componets/products/products'
import Account from './Componets/accounts/Account';
import AddProduct from './Componets/products/AddProduct';

const AppRouter = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/addproducts" element={<AddProduct />} />

      </Routes>
  
  );
};

export default AppRouter;
