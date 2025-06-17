import React, { useEffect } from 'react';
import "./App.css";
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Import GSAP for animations
import { gsap } from 'gsap';
import Qitchen from './pages/Qitchen/Qitchen';
import Ueloce from './pages/Ueloce/Ueloce';
import Rentiva from './pages/Rentiva/Rentiva';
import URBNCTRL from './pages/URBNCTRL/URBNCTRL';

const App = () => {
  // Initialize GSAP on window object for global access
  useEffect(() => {
    window.gsap = gsap;
  }, []);  return (
    <SmoothScroll>
      <div className='app'>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qitchen" element={<Qitchen />} />
          <Route path="/ueloce" element={<Ueloce />} />
          <Route path="/rentiva" element={<Rentiva />} />
          <Route path="/URBNCTRL" element={<URBNCTRL />} />
        </Routes>
      </div>
    </SmoothScroll>
  )
}

export default App
