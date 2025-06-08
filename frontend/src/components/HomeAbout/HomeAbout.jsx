import React from 'react';
import assets from '../../assets/assets.js';
import ScrollReveal from '../ScrollReveal/ScrollReveal.jsx';
import "./homeAbout.css";

const HomeAbout = () => {
  return (
    <section className='homeAbout'>
        <div className="homeAboutContainer">
            <div className="homeAboutContent">

                {/* Left Part - Text Content */}
                <div className="homeAboutTextSection">
                    <div className="homeAboutTextContent">
                        <h2 className="homeAboutTitle">About Me</h2>                        <div className="homeAboutDescription">
                            <ScrollReveal 
                                baseOpacity={0.2}
                                baseRotation={2}
                                blurStrength={3}
                                containerClassName="homeAboutScrollReveal"
                                textClassName="homeAboutScrollText"
                            >
                                As a dedicated Cybersecurity student with a passion for web development, 
                                I'm actively seeking opportunities as a Frontend Developer. 
                                My academic background in cybersecurity provides me with a unique perspective on building secure, 
                                robust web applications.
                            </ScrollReveal>
                            
                            <ScrollReveal 
                                baseOpacity={0.2}
                                baseRotation={1.5}
                                blurStrength={3}
                                containerClassName="homeAboutScrollReveal"
                                textClassName="homeAboutScrollText"
                            >
                                I thrive on creating modern, responsive web applications using cutting-edge technologies like React, 
                                JavaScript, and contemporary CSS frameworks. My approach combines security-first thinking 
                                with innovative design patterns to deliver exceptional user experiences.
                            </ScrollReveal>
                            
                            <ScrollReveal 
                                baseOpacity={0.2}
                                baseRotation={1}
                                blurStrength={3}
                                containerClassName="homeAboutScrollReveal"
                                textClassName="homeAboutScrollText"
                            >
                                Always eager to learn and embrace new challenges, I'm constantly expanding my skillset and 
                                exploring emerging technologies in the rapidly evolving world of web development.
                            </ScrollReveal>
                        </div><div className="homeAboutStats">
                            {/* <div className="homeAboutStat">
                                <span className="homeAboutStatNumber">2+</span>
                                <span className="homeAboutStatLabel">Years Learning</span>
                            </div> */}
                            {/* <div className="homeAboutStat">
                                <span className="homeAboutStatNumber">10+</span>
                                <span className="homeAboutStatLabel">Projects Built</span>
                            </div> */}
                            <div className="homeAboutStat">
                                <span className="homeAboutStatNumber">∞</span>
                                <span className="homeAboutStatLabel">Passion for Code</span>
                            </div>
                        </div>

                        {/* Download Resume Button */}
                        <div className="homeAboutButtonContainer">
                            <button className="homeAboutDownloadButton">
                                <div className="homeAboutDocs">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    Download My Resume
                                </div>
                                <div className="homeAboutDownload">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                            </button>
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