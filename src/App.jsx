// import { useState } from 'react'
import { Route,Router,Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./Component/Navbar"
import Home from "./Component/Home/Home"
import Help from "./Component/Help/Help"
import Aboutus from "./Component/About/Aboutus"
import Login from "./Component/Login/Login"
import Signup from "./Component/Signup/Signup"
function App() {
  return (
    <>
    <div className=" h-screen">
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />}/> 
        <Route path="help" element={<Help />}/> 
        <Route path="aboutus" element={<Aboutus />}/> 
        <Route path="login" element={<Login />}/> 
        <Route path="signup" element={<Signup />}/> 
      </Routes>
    </div>
    </>
  )
}

export default App
