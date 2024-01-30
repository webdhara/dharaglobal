import React from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import IntershipReg from './Components/IntershipReg';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Verification from './Components/Verification';
import Book from './Components/Book';
import Footer from './Components/Footer';
export default function () {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/reg" element={<IntershipReg/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/testimonials" element={<Testimonials/>}></Route>
    <Route path="/verify" element={<Verification/>}></Route>
    <Route path="/book" element={<Book/>}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}
