import React, { useState, useEffect } from "react";
import "./homeHero.css";

const HomeHero = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <section className="homeHero">
      {/* Background gradient */}
      <div className="homeHeroBackground"></div>      {/* Location badge */}
      <div className="homeHeroLocationBadge">
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
      </div>
      {/* Main content */}
      <div className="homeHeroContent">
        {/* Scrolling name text */}
        <div className="homeHeroScrollingText">
          <div className="homeHeroScrollingTextContent">
            <span>Jakub Stankiewicz —</span>
            <span>Jakub Stankiewicz —</span>
            <span>Jakub Stankiewicz —</span>
          </div>
        </div>{" "}
        {/* Main title */}
        <div className="homeHeroMainTitle">
          <h1 className="homeHeroMainTitleText">
            <span className="homeHeroMainTitleTextLine">Jakub</span>
            <span className="homeHeroMainTitleTextLine">Stankiewicz</span>
          </h1>
        </div>
        {/* Skills showcase */}
        <div className="homeHeroSkills">
          {/* <div className="homeHeroSkillsItem">React</div>
          <div className="homeHeroSkillsItem">Node.js</div>
          <div className="homeHeroSkillsItem">TypeScript</div>
          <div className="homeHeroSkillsItem">Next.js</div> */}
          <p className="homeHeroSkillsText">
            Front-end development
          </p>
        </div>
      </div>{" "}
      {/* Right side professional info */}
      <div className="homeHeroProfessionalInfo">
        <div className={`homeHeroProfessionalInfoArrow ${scrolled ? "homeHeroProfessionalInfoArrowRotated" : ""}`} onClick={scrollToNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14m7-7l-7 7-7-7" />
          </svg>
        </div>
        <div className="homeHeroProfessionalInfoText">
          <div className="homeHeroProfessionalInfoTextMain">Passionate</div>
          <div className="homeHeroProfessionalInfoTextSub">
            Designer & <span className="homeHeroProfessionalInfoTextHighlight">Developer</span>
          </div>
        </div>
      </div>
      {/* Floating elements for visual appeal */}
      <div className="homeHeroFloatingElements">
        <div className="homeHeroFloatingElement homeHeroFloatingElement1"></div>
        <div className="homeHeroFloatingElement homeHeroFloatingElement2"></div>
        <div className="homeHeroFloatingElement homeHeroFloatingElement3"></div>
      </div>{" "}
      {/* Bottom CTA */}
      {/* <div className="homeHeroBottomCta">
        <div className="homeHeroBottomCtaText">Available and ready for new opportunities</div>
        <div className="homeHeroBottomCtaStatus">
          <div className="homeHeroBottomCtaStatusDot"></div>
          <span>Jakub</span>
        </div>
      </div> */}
    </section>
  );
};

export default HomeHero;
