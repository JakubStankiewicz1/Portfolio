import React, { useRef, useState } from "react";
import assets from "../../assets/assets.js";
import VariableProximity from "../VariableProximity/VariableProximity";
import "./homeAbout.css";

const HomeAbout = () => {
  const aboutRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true);
      
      // Utwórz element anchor do pobierania
      const link = document.createElement('a');
      link.href = '/CV_Jakub_Stankiewicz.pdf';
      link.download = 'Jakub_Stankiewicz_CV.pdf';
      link.target = '_blank';
      
      // Dodaj link do DOM, kliknij go i usuń
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Symulacja krótkiego opóźnienia dla lepszego UX
      setTimeout(() => {
        setIsDownloading(false);
      }, 1500);
      
    } catch (error) {
      console.error('Błąd podczas pobierania CV:', error);
      setIsDownloading(false);
    }
  };

  return (
    <section className="homeAbout" ref={aboutRef}>
      <div className="homeAboutContainer">
        <div className="homeAboutContent">
          {/* Left Part - Text Content */}
          <div className="homeAboutTextSection">            <div className="homeAboutTextContent">
              <h2 className="homeAboutTitle">
                <VariableProximity
                  label="About Me"
                  fromFontVariationSettings="'wght' 600, 'opsz' 12"
                  toFontVariationSettings="'wght' 800, 'opsz' 72"
                  containerRef={aboutRef}
                  radius={120}
                  falloff="exponential"
                  className="homeAboutTitleVariableProximity"
                />
              </h2>
              <div className="homeAboutDescription">
                <div className="homeAboutParagraphContainer">
                  <VariableProximity
                    label="As a dedicated Cybersecurity student with a passion for web development, I'm actively seeking opportunities as a Frontend Developer. My academic background in cybersecurity provides me with a unique perspective on building secure, robust web applications."
                    fromFontVariationSettings="'wght' 400, 'opsz' 12"
                    toFontVariationSettings="'wght' 600, 'opsz' 48"
                    containerRef={aboutRef}
                    radius={100}
                    falloff="exponential"
                    className="homeAboutDescriptionVariableProximity"
                  />
                </div>

                <div className="homeAboutParagraphContainer">
                  <VariableProximity
                    label="I thrive on creating modern, responsive web applications using cutting-edge technologies like React, JavaScript, and contemporary CSS frameworks. My approach combines security-first thinking with innovative design patterns to deliver exceptional user experiences."
                    fromFontVariationSettings="'wght' 400, 'opsz' 12"
                    toFontVariationSettings="'wght' 600, 'opsz' 48"
                    containerRef={aboutRef}
                    radius={100}
                    falloff="exponential"
                    className="homeAboutDescriptionVariableProximity"
                  />
                </div>

                <div className="homeAboutParagraphContainer">
                  <VariableProximity
                    label="Always eager to learn and embrace new challenges, I'm constantly expanding my skillset and exploring emerging technologies in the rapidly evolving world of web development."
                    fromFontVariationSettings="'wght' 400, 'opsz' 12"
                    toFontVariationSettings="'wght' 600, 'opsz' 48"
                    containerRef={aboutRef}
                    radius={100}
                    falloff="exponential"
                    className="homeAboutDescriptionVariableProximity"
                  />
                </div>
              </div>
              <div className="homeAboutStats">
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

              




            </div>
          </div>

          {/* Right Part - Image */}
          <div className="homeAboutImageSection">
            <div className="homeAboutImageContainer">
              <div className="homeAboutImageWrapper">
                <img src={assets.myPhoto} alt="Profile" className="homeAboutImage" />
                <div className="homeAboutImageOverlay"></div>
              </div>
            </div>
          </div>
        </div>        {/* Download Resume Button */}
              <div className="homeAboutButtonContainer">
                <button 
                  className={`homeAboutDownloadButton ${isDownloading ? 'downloading' : ''}`} 
                  onClick={handleDownloadCV}
                  disabled={isDownloading}
                >
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
                      <line x1="16" y1="17" x2="8" y2="17"></line>                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    {isDownloading ? 'Downloading...' : 'Download My Resume'}
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
    </section>
  );
};

export default HomeAbout;
