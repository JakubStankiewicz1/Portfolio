import React, { useState, useEffect, useRef } from 'react';
import VariableProximity from '../VariableProximity/VariableProximity';
import './homeContactMe.css';
import profilePhoto from '../../assets/myPhoto.jpg';

const HomeContactMe = () => {
  const [currentTime, setCurrentTime] = useState('');
  const contactRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Warsaw', // Polish time zone
        timeZoneName: 'short'
      });
      setCurrentTime(timeString);
    };

    // Update time immediately
    updateTime();
    
    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);  return (
    <div className='homeContactMe' ref={contactRef}>
        <div className="homeContactMeContainer">
            <div className="homeContactMeLeft">                <div className="profileSection">
                    <img src={profilePhoto} alt="Profile" className="profileImage" />
                    <div className="mainText">
                        <h1>
                            <VariableProximity
                                label="Let's work"
                                fromFontVariationSettings="'wght' 400, 'opsz' 12"
                                toFontVariationSettings="'wght' 800, 'opsz' 144"
                                containerRef={contactRef}
                                radius={150}
                                falloff="exponential"
                                className="homeContactMeVariableProximity"
                            />
                        </h1>
                        <h1>
                            <VariableProximity
                                label="together"
                                fromFontVariationSettings="'wght' 400, 'opsz' 12"
                                toFontVariationSettings="'wght' 800, 'opsz' 144"
                                containerRef={contactRef}
                                radius={150}
                                falloff="exponential"
                                className="homeContactMeVariableProximity"
                            />
                        </h1>
                    </div>
                </div>
                
                <div className="contactInfo">
                    <a href="mailto:stankiewicz.kuba152@gmail.com" className="contactButton">
                        stankiewicz.kuba152@gmail.com
                    </a>
                    <a href="tel:+48690001083" className="contactButton">
                        +48 690 001 083
                    </a>
                </div>
            </div>

            <div className="homeContactMeRight">
                <div className="getInTouchButton">
                    <span>Get in touch</span>
                    <div className="arrow">↗</div>
                </div>
            </div>

            <div className="homeContactMeFooter">
                <div className="footerLeft">
                    <div className="versionInfo">
                        <span className="label">VERSION</span>
                        <span className="value">2025 © Edition</span>
                    </div>                    <div className="timeInfo">
                        <span className="label">LOCAL TIME</span>
                        <span className="value">{currentTime}</span>
                    </div>
                </div>
                
                <div className="footerRight">
                    <span className="label">SOCIALS</span>
                    <div className="socialLinks">
                        {/* <a href="https://awwwards.com" target="_blank" rel="noopener noreferrer">Awwwards</a> */}
                        {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> */}
                        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> */}
                        <a href="https://www.linkedin.com/in/kuba-stankiewicz-258381300/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/JakubStankiewicz1" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContactMe