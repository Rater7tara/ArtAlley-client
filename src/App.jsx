import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import NavBar from './Pages/Shared/Navbar/NavBar'
import Footer from './Pages/Shared/Footer/Footer'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
