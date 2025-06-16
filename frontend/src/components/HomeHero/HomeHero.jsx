import React, { useState, useEffect, useRef } from "react";
import VariableProximity from "../VariableProximity/VariableProximity";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsImage } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import { HiGlobeAlt } from "react-icons/hi";
import "./homeHero.css";

const HomeHero = () => {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  // Generate dynamic availability date
  const getAvailabilityDate = () => {
    const now = new Date();
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
                   'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const currentMonth = months[now.getMonth()];
    const currentYear = now.getFullYear().toString().slice(-2);
    return `${currentMonth}'${currentYear}`;
  };

  // Handle scroll for arrow rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <section className="homeHero" ref={heroRef}>
      {/* Background gradient */}
      {/* <div className="homeHeroBackground"></div> Location badge */}
      {/* <div className="homeHeroLocationBadge">
        <div className="homeHeroLocationBadgeText">
          <div className="homeHeroLocationBadgeTextSmall">Located</div>
          <div className="homeHeroLocationBadgeTextSmall">in the</div>
          <div className="homeHeroLocationBadgeTextSmall">Poland</div>
        </div>
        <div className="homeHeroLocationBadgeIcon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
      </div>{" "} */}
      {/* Exact replica of the design */}
      <div className="homeHeroContent">
        {" "}
        {/* Large title at the top */}
        <div className="homeHeroMainTitle">
          <h1 className="homeHeroMainTitleText">
            <VariableProximity
              label="jakub stankiewicz"
              fromFontVariationSettings="'wght' 700, 'opsz' 12"
              toFontVariationSettings="'wght' 900, 'opsz' 144"
              containerRef={heroRef}
              radius={150}
              falloff="exponential"
              className="homeHeroVariableProximity"
            />
          </h1>

          {/* Frontend Developer subtitle */}
          <div className="homeHeroSubtitle">
            <p className="homeHeroSubtitleText">Frontend Developer</p>
          </div>
        </div>
        {/* Three column layout */}
        <div className="homeHeroLayout">
          {/* Left column */}
          <div className="homeHeroLeftColumn">
            {/* Arrow down indicator */}
            {/* <div className="homeHeroArrowDown">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13l3 3 7-7" />
                <path d="M2 12l5 5L21 3" />
              </svg>
            </div> */}
            {/* Description text */}
            <div className="homeHeroDescription">
              <p className="homeHeroDescriptionText">Open to job opportunities worldwide.</p>
              <p className="homeHeroDescriptionText">
                Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.
              </p>
            </div>{" "}
            {/* Contact button */}
            <div className="homeHeroContactButton">
              <button className="homeHeroContactBtn">
                <span>CONTACT</span>
                <HiArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Center column - Image */}
          <div className="homeHeroCenterColumn">
            <div className="homeHeroImageContainer">
              <img
                src="/src/assets/myPhoto.jpg"
                alt="Profile"
                className="homeHeroImage"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />{" "}
              <div className="homeHeroImagePlaceholder" style={{ display: "none" }}>
                {/* <div className="homeHeroImagePlaceholderContent">
                  <BsImage size={48} />
                </div> */}
              </div>
            </div>
          </div>

          {/* Right column */}          <div className="homeHeroRightColumn">
            <div className="homeHeroAvailability">
              <div className="homeHeroAvailabilityText">AVAILABLE FOR WORK</div>
              <div className="homeHeroAvailabilityDate">{getAvailabilityDate()}</div>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* Scroll indicator - COMMENTED OUT */}
      {/* <div className="homeHeroScrollIndicator">
        <div className={`homeHeroScrollArrow ${scrolled ? "homeHeroScrollArrowRotated" : ""}`} onClick={scrollToNext}>
          <IoChevronDown size={24} />
        </div>
      </div> */}

      {/* Floating elements for visual appeal */}
      <div className="homeHeroFloatingElements">
        <div className="homeHeroFloatingElement homeHeroFloatingElement1"></div>
        <div className="homeHeroFloatingElement homeHeroFloatingElement2"></div>
        <div className="homeHeroFloatingElement homeHeroFloatingElement3"></div>
      </div>
    </section>
  );
};

export default HomeHero;
