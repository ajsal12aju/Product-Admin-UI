import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Componets/login/Login';
import Home from './Componets/home/Home';
import Product from './Componets/products/products';
import Account from './Componets/accounts/Account';
import AddProduct from './Componets/products/AddProduct';

const AppRouter = (props) => {
  console.log(props, "dsfasf")
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Product {...props} />} />
      <Route path="/accounts" element={<Account />} />
      <Route path="/addproducts" element={<AddProduct {...props} />} />
    </Routes>
  );
};

export default AppRouter;
