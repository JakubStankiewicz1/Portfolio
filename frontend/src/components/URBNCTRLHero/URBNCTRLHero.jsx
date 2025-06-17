import React from 'react';
import './URBNCTRLHero.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import assets from '../../assets/assets';
import Magnet from '../Magnet/Magnet';

const URBNCTRLHero = () => {

  const handleGithubClick = (e) => {
    e.preventDefault();
    toast.info('🚀 Service available soon! Stay tuned for updates.', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }
    });
  };

  return (
    <div className="QitchenHero">
      <div className="QitchenHeroContainer">
        {/* Top Part - Title */}
        <div className="hero-title">
          <h1>URBNCTRL</h1>
        </div>
        {/* Middle Part - Info Sections in Row */}
        <div className="hero-info-sections">
          <div className="info-section">
            <h4>SERVICES</h4>
            <p>Full Stack Development</p>
          </div>

          <div className="info-section">
            <h4>Tech Stack</h4>
            <p>React, Java, JavaScript, MySql</p>
          </div>

          <div className="info-section">
            {/* <h4>LOCATION & YEAR</h4>
                    <p>Poland © 2024</p> */}
          </div>
        </div>{" "}
        {/* Bottom Part - Large Image with Overlay */}
        <div className="hero-bottom">          {/* Circular GitHub Button */}
          <div className="circular-github-button">
            <Magnet padding={30} magnetStrength={1.5} activeTransition="transform 0.2s ease-out" inactiveTransition="transform 0.4s ease-in-out">
              <a href="#" onClick={handleGithubClick} rel="noopener noreferrer">
                Github repo
              </a>
            </Magnet>
          </div>

          {/* Circular Live Site Button */}
          <div className="circular-live-button">
            <Magnet padding={30} magnetStrength={1.5} activeTransition="transform 0.2s ease-out" inactiveTransition="transform 0.4s ease-in-out">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Live site ↗
              </a>
            </Magnet>
          </div>

          {/* Large Project Image */}
          <div className="large-project-image">
            <img src={assets.urbnctrlOne} alt="Qitchen Project" />
            {/* <div className="image-overlay-text">QITCHEN</div> */}        </div>
      </div>
      
      {/* Toast Container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    </div>
  )
}

export default URBNCTRLHero