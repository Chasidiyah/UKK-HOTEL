import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./pages/admin/home";
import Kamar from "./pages/admin/kamar";
import NavbarAdmin from "./pages/admin/navbar";
import TipeKamar from "./pages/admin/tipe_kamar";
import User from "./pages/admin/user";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/admin/home" element={<Home/>} />
      <Route exact path="/admin/user" element={<User/>} />
      <Route exact path="/admin/tipe_kamar" element={<TipeKamar/>} />
      <Route exact path="/admin/kamar" element={<Kamar/>} />
      <Route exact path="/admin/navbar" element={<NavbarAdmin/>} />
    </Routes>
  )
}

export default App