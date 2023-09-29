import { useState } from 'react'
import Login from './component/auth/login.jsx'
import Register from './component/auth/Register.jsx'
import Home from './component/home/home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Profile_page from "./component/auth/profile.jsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/profile" element={<Profile_page />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
