import React from 'react'
import Home from './Pages/Home'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path= '/contact' element = {<Contact/>} />
      </Routes>

    </div>
  )
}

export default App