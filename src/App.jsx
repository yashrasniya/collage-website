import { useState } from 'react'
import Login from './component/auth/login.jsx'
import Register from './component/auth/Register.jsx'
import Home from './component/home/home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Profile_page from "./component/auth/profile.jsx";
import Classmates from "./component/nav_pages/Classmates.jsx";
import Feedback from "./component/nav_pages/feedback.jsx";
import Old_paper from "./component/nav_pages/old_paper.jsx";
import DirectorMessage from './pages/directorMessage/DirectorMessage.jsx';
import About from './component/home/about.jsx';
import Departmen from './pages/departmen/Departmen.jsx';

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/profile" element={<Profile_page />}/>
            <Route path="/Classmates" element={<Classmates/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/oldpaper" element={<Old_paper/>}/>
            <Route path='/director-message' element={<DirectorMessage />} />
            <Route path='/about' element={<About />} />
            <Route path='/deparment' element={<Departmen />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
