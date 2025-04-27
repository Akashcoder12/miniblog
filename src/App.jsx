import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import User from './pages/User';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/categories' element={<Categories></Categories>}> </Route>
        <Route path='/User' element={<User></User>}> </Route>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}
