import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuItemsRef = useRef([]);
  // Smooth scroll function
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 80; // Height of navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation clicks
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
    setMenuOpen(false); // Close mobile menu if open
  };

  // Handle scroll events for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Magnetic hover effect
  useEffect(() => {
    const handleMagnetic = (e, element) => {
      const boundingRect = element.getBoundingClientRect();
      const relX = e.clientX - boundingRect.left - boundingRect.width / 2;
      const relY = e.clientY - boundingRect.top - boundingRect.height / 2;

      const textElement = element.querySelector('.navbarContainerRightContainerLinksItemLinkText');
      const dotElement = element.querySelector('.navbarContainerRightContainerLinksItemLinkDot');

      if (textElement && window.gsap) {
        window.gsap.to(textElement, {
          x: relX * 0.1,
          y: relY * 0.1,
          ease: 'power2.out',
          duration: 0.5
        });
      }
      
      if (dotElement && window.gsap) {
        window.gsap.to(dotElement, {
          x: relX * 0.15,
          y: relY * 0.15,
          ease: 'power2.out',
          duration: 0.1
        });
      }
      
      if (window.gsap) {
        window.gsap.to(element, {
          x: relX * 0.2,
          y: relY * 0.2,
          ease: 'power2.out',
          duration: 0.5
        });
      }
    };

    const resetMagnetic = (element) => {
      const textElement = element.querySelector('.navbarContainerRightContainerLinksItemLinkText');
      const dotElement = element.querySelector('.navbarContainerRightContainerLinksItemLinkDot');
      
      if (textElement && window.gsap) {
        window.gsap.to(textElement, {
          x: 0,
          y: 0,
          ease: 'power2.out',
          duration: 0.5
        });
      }
      
      if (dotElement && window.gsap) {
        window.gsap.to(dotElement, {
          x: 0,
          y: 0,
          ease: 'power2.out',
          duration: 0.1
        });
      }
      
      if (window.gsap) {
        window.gsap.to(element, {
          x: 0,
          y: 0,
          ease: 'power2.out',
          duration: 0.5
        });
      }
    };

    const magneticElements = document.querySelectorAll('.navbarContainerRightContainerLinksItemLinkMagnetic');
    magneticElements.forEach(elem => {
      elem.addEventListener('mousemove', (e) => handleMagnetic(e, elem));
      elem.addEventListener('mouseleave', () => resetMagnetic(elem));
    });

    return () => {
      magneticElements.forEach(elem => {
        elem.removeEventListener('mousemove', (e) => handleMagnetic(e, elem));
        elem.removeEventListener('mouseleave', () => resetMagnetic(elem));
      });
    };
  }, []);
  return (
    <>
      <div className={`navbar ${scrolled ? 'navbarScrolled' : ''}`}>
        <div className="navbarContainer">          {/* Left Part - Logo */}          
          <div className="navbarContainerLeft">
            <div 
              className="navbarContainerLeftLogoMagnetic"
              onClick={(e) => handleNavClick(e, 'home')}
              style={{ cursor: 'pointer' }}
            >
              <span className="navbarContainerLeftLogoMagneticCodePartCLetter">©</span>
              <NavLink to='/' className="navbarContainerLeftLogoMagneticTextSlider">
                <span className="navbarContainerLeftLogoMagneticTextSliderContent">Code by Jakub Stankiewicz</span>
              </NavLink>
            </div>
          </div>

          {/* Right Part - Navigation */}
          <div className="navbarContainerRight">            <ul className="navbarContainerRightContainerLinks">
              <li className="navbarContainerRightContainerLinksItem">
                <a 
                  href="#work" 
                  className="navbarContainerRightContainerLinksItemLink navbarContainerRightContainerLinksItemLinkMagnetic"
                  onClick={(e) => handleNavClick(e, 'work')}
                >
                  <span className="navbarContainerRightContainerLinksItemLinkText">Work</span>
                  <span className="navbarContainerRightContainerLinksItemLinkDot"></span>
                </a>
              </li>
              <li className="navbarContainerRightContainerLinksItem">
                <a 
                  href="#about" 
                  className="navbarContainerRightContainerLinksItemLink navbarContainerRightContainerLinksItemLinkMagnetic"
                  onClick={(e) => handleNavClick(e, 'about')}
                >
                  <span className="navbarContainerRightContainerLinksItemLinkText">About</span>
                  <span className="navbarContainerRightContainerLinksItemLinkDot"></span>
                </a>
              </li>
              <li className="navbarContainerRightContainerLinksItem">
                <a 
                  href="#contact" 
                  className="navbarContainerRightContainerLinksItemLink navbarContainerRightContainerLinksItemLinkMagnetic"
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  <span className="navbarContainerRightContainerLinksItemLinkText">Contact</span>
                  <span className="navbarContainerRightContainerLinksItemLinkDot"></span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Hamburger Menu Button (visible on scroll) */}
          <div className={`navbarContainerMenuToggle ${scrolled ? 'navbarContainerMenuToggleVisible' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`navbarContainerMenuToggleHamburger ${menuOpen ? 'navbarContainerMenuToggleHamburgerActive' : ''}`}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbarMobileMenu ${menuOpen ? 'navbarMobileMenuOpen' : ''}`}>
        <div className="navbarMobileMenuContainer">
          <div className="navbarMobileMenuContainerHeader">
            <span>NAVIGATION</span>
            <button className="navbarMobileMenuContainerHeaderCloseMenu" onClick={() => setMenuOpen(false)}>
              <div className="navbarMobileMenuContainerHeaderCloseMenuIcon"></div>
            </button>
          </div>
          <div className="navbarMobileMenuContainerContent">            <ul className="navbarMobileMenuContainerContentLinks">
              <li className="navbarMobileMenuContainerContentLinksItem">
                <a 
                  href="#home" 
                  className="navbarMobileMenuContainerContentLinksItemLink" 
                  onClick={(e) => handleNavClick(e, 'home')}
                >
                  <span className="navbarMobileMenuContainerContentLinksItemLinkDot"></span>
                  <span>Home</span>
                </a>
              </li>
              <li className="navbarMobileMenuContainerContentLinksItem">
                <a 
                  href="#work" 
                  className="navbarMobileMenuContainerContentLinksItemLink" 
                  onClick={(e) => handleNavClick(e, 'work')}
                >
                  <span>Work</span>
                </a>
              </li>
              <li className="navbarMobileMenuContainerContentLinksItem">
                <a 
                  href="#about" 
                  className="navbarMobileMenuContainerContentLinksItemLink" 
                  onClick={(e) => handleNavClick(e, 'about')}
                >
                  <span>About</span>
                </a>
              </li>
              <li className="navbarMobileMenuContainerContentLinksItem">
                <a 
                  href="#contact" 
                  className="navbarMobileMenuContainerContentLinksItemLink" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>            <div className="navbarMobileMenuContainerContentSocials">
              <h5>SOCIALS</h5>
              <ul className="navbarMobileMenuContainerContentSocialsLinks">
                <li><a href="https://www.linkedin.com/in/kuba-stankiewicz-258381300/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/JakubStankiewicz1" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
