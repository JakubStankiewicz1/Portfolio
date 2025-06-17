import React from 'react';
import './ueloceHero.css';
import assets from '../../assets/assets';
import Magnet from '../Magnet/Magnet';

const UeloceHero = () => {
  return (
    <div className="QitchenHero">
      <div className="QitchenHeroContainer">
        {/* Top Part - Title */}
        <div className="hero-title">
          <h1>Ueloce</h1>
        </div>
        {/* Middle Part - Info Sections in Row */}
        <div className="hero-info-sections">
          <div className="info-section">
            <h4>SERVICES</h4>
            <p>Front End Development</p>
          </div>

          <div className="info-section">
            <h4>Tech Stack</h4>
            <p>React, JavaScript</p>
          </div>

          <div className="info-section">
            {/* <h4>LOCATION & YEAR</h4>
                    <p>Poland © 2024</p> */}
          </div>
        </div>{" "}
        {/* Bottom Part - Large Image with Overlay */}
        <div className="hero-bottom">
          {/* Circular GitHub Button */}
          <div className="circular-github-button">
            <Magnet padding={30} magnetStrength={1.5} activeTransition="transform 0.2s ease-out" inactiveTransition="transform 0.4s ease-in-out">
              <a href="https://github.com/JakubStankiewicz1/Ueloce" target="_blank" rel="noopener noreferrer">
                Github repo
              </a>
            </Magnet>
          </div>

          {/* Circular Live Site Button */}
          <div className="circular-live-button">
            <Magnet padding={30} magnetStrength={1.5} activeTransition="transform 0.2s ease-out" inactiveTransition="transform 0.4s ease-in-out">
              <a href="https://ueloce.onrender.com/" target="_blank" rel="noopener noreferrer">
                Live site ↗
              </a>
            </Magnet>
          </div>

          {/* Large Project Image */}
          <div className="large-project-image">
            <img src={assets.ueloceOne} alt="Qitchen Project" />
            {/* <div className="image-overlay-text">QITCHEN</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UeloceHero