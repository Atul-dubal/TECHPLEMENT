import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ERROR404 from './pages/ERROR404'
import Logout from './pages/Logout'
function App() {
  return (
    <>
      

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/*' element={<ERROR404 />} />
          


        </Routes>
      </BrowserRouter>
      
      <Footer />
    </>
  )
}

export default App