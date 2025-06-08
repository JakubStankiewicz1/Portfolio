import React from 'react';
import assets from '../../assets/assets.js';
import "./homeAbout.css";

const HomeAbout = () => {
  return (
    <section className='homeAbout'>
        <div className="homeAboutContainer">
            <div className="homeAboutContent">

                {/* Left Part - Text Content */}
                <div className="homeAboutTextSection">
                    <div className="homeAboutTextContent">
                        <h2 className="homeAboutTitle">About Me</h2>
                        <div className="homeAboutDescription">
                            <p className="homeAboutParagraph">
                                As a dedicated <span className="homeAboutHighlight">Cybersecurity student</span> with a passion for web development, 
                                I'm actively seeking opportunities as a <span className="homeAboutHighlight">Frontend Developer</span>. 
                                My academic background in cybersecurity provides me with a unique perspective on building secure, 
                                robust web applications.
                            </p>
                            <p className="homeAboutParagraph">
                                I thrive on creating modern, responsive web applications using cutting-edge technologies like React, 
                                JavaScript, and contemporary CSS frameworks. My approach combines <span className="homeAboutHighlight">security-first thinking</span> 
                                with innovative design patterns to deliver exceptional user experiences.
                            </p>
                            <p className="homeAboutParagraph">
                                Always eager to learn and embrace new challenges, I'm constantly expanding my skillset and 
                                exploring emerging technologies in the rapidly evolving world of web development.
                            </p>
                        </div>
                        <div className="homeAboutStats">
                            <div className="homeAboutStat">
                                <span className="homeAboutStatNumber">2+</span>
                                <span className="homeAboutStatLabel">Years Learning</span>
                            </div>
                            <div className="homeAboutStat">
                                <span className="homeAboutStatNumber">10+</span>
                                <span className="homeAboutStatLabel">Projects Built</span>
                            </div>
                            <div className="homeAboutStat">
                                <span className="homeAboutStatNumber">∞</span>
                                <span className="homeAboutStatLabel">Passion for Code</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Part - Image */}
                <div className="homeAboutImageSection">
                    <div className="homeAboutImageContainer">
                        <div className="homeAboutImageWrapper">
                            <img 
                                src={assets.myPhoto} 
                                alt="Profile" 
                                className="homeAboutImage"
                            />
                            <div className="homeAboutImageOverlay"></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default HomeAbout