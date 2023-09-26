import { useState } from 'react'
import Login from './component/auth/login.jsx'
import Home from './component/home/home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
