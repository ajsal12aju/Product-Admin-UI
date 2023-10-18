import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Componets/login/Login';
import Home from './Componets/home/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
