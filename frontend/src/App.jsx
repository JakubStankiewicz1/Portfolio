import React, { useEffect } from 'react';
import "./App.css";
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';

// Import GSAP for animations
import { gsap } from 'gsap';

const App = () => {
  // Initialize GSAP on window object for global access
  useEffect(() => {
    window.gsap = gsap;
  }, []);
  return (
    <SmoothScroll>
      <div className='app'>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </SmoothScroll>
  )
}

export default App
