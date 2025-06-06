import React from 'react';
import "./App.css";
// import { Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='app'>

      <Navbar />

      <Routes>
        <Route  path="/" element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App
