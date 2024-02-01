import React from 'react';
import Navbar from './Components/Navbar';
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import IntershipReg from './Components/IntershipReg';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Verification from './Components/Verification';
import Book from './Components/Book';
import Footer from './Components/Footer';

const pageVariants = {
  initial: { opacity: 0 ,transition: { duration: 1} },
  animate: { opacity: 1 ,transition: { duration: 1 } },
  exit: { opacity: 0 ,transition: { duration: 1 } },
};

export default function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar/>
      <AnimatePresence >
        <Routes location={location} key={location.key}>
          <Route path="/" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Home/>
            </motion.div>
          }/>
          <Route path="/about" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <About/>
            </motion.div>
          }/>
          <Route path="/contact" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Contact/>
            </motion.div>
          }/>
          <Route path="/reg" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <IntershipReg/>
            </motion.div>
          }/>
          <Route path="/services" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Services/>
            </motion.div>
          }/>
          <Route path="/testimonials" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Testimonials/>
            </motion.div>
          }/>
          <Route path="/verify" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Verification/>
            </motion.div>
          }/>
          <Route path="/book" element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Book/>
            </motion.div>
          }/>
        </Routes>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}
