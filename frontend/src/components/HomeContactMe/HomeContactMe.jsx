import React, { useState, useEffect } from 'react';
import './homeContactMe.css';
import profilePhoto from '../../assets/myPhoto.jpg';

const HomeContactMe = () => {
  const [currentTime, setCurrentTime] = useState('');

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
  }, []);
  return (
    <div className='homeContactMe'>
        <div className="homeContactMeContainer">
            <div className="homeContactMeLeft">
                <div className="profileSection">
                    <img src={profilePhoto} alt="Profile" className="profileImage" />
                    <div className="mainText">
                        <h1>Let's work</h1>
                        <h1>together</h1>
                    </div>
                </div>
                
                <div className="contactInfo">
                    <a href="mailto:info@dennissnellenberg.com" className="contactButton">
                        info@dennissnellenberg.com
                    </a>
                    <a href="tel:+31627847430" className="contactButton">
                        +31 6 27 84 74 30
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
                        <span className="value">2022 © Edition</span>
                    </div>                    <div className="timeInfo">
                        <span className="label">LOCAL TIME</span>
                        <span className="value">{currentTime}</span>
                    </div>
                </div>
                
                <div className="footerRight">
                    <span className="label">SOCIALS</span>
                    <div className="socialLinks">
                        <a href="https://awwwards.com" target="_blank" rel="noopener noreferrer">Awwwards</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContactMe