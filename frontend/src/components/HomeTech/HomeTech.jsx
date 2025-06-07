import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import assets from '../../assets/assets.js';
import "./homeTech.css";

const HomeTech = () => {
  const cardsRef = useRef([]);
  const contentsRef = useRef([]);
  const iconsRef = useRef([]);
  const namesRef = useRef([]);
  
  useEffect(() => {
    const handleMagnetic = (e, card, content, icon, name) => {
      const boundingRect = card.getBoundingClientRect();
      const relX = e.clientX - boundingRect.left - boundingRect.width / 2;
      const relY = e.clientY - boundingRect.top - boundingRect.height / 2;

      // Apply magnetic effect to content elements with GSAP
      gsap.to(content, {
        x: relX * 0.12,
        y: relY * 0.12,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(icon, {
        x: relX * 0.15,
        y: relY * 0.15,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(name, {
        x: relX * 0.08,
        y: relY * 0.08,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const resetMagnetic = (content, icon, name) => {
      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(icon, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(name, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    // Add event listeners to all cards
    cardsRef.current.forEach((card, index) => {
      if (card && contentsRef.current[index] && iconsRef.current[index] && namesRef.current[index]) {
        const content = contentsRef.current[index];
        const icon = iconsRef.current[index];
        const name = namesRef.current[index];

        const mouseMoveHandler = (e) => handleMagnetic(e, card, content, icon, name);
        const mouseLeaveHandler = () => resetMagnetic(content, icon, name);

        card.addEventListener('mousemove', mouseMoveHandler);
        card.addEventListener('mouseleave', mouseLeaveHandler);

        // Store handlers for cleanup
        card._mouseMoveHandler = mouseMoveHandler;
        card._mouseLeaveHandler = mouseLeaveHandler;
      }
    });

    // Cleanup
    return () => {
      cardsRef.current.forEach(card => {
        if (card && card._mouseMoveHandler && card._mouseLeaveHandler) {
          card.removeEventListener('mousemove', card._mouseMoveHandler);
          card.removeEventListener('mouseleave', card._mouseLeaveHandler);
        }
      });
    };
  }, []);
  const techStacks = {
    Languages: [
      { name: "Python", icon: assets.javaLogo },
      { name: "Java", icon: assets.javaLogo },
      { name: "JavaScript", icon: assets.javaLogo }
    ],
    Frontend: [
      { name: "React", icon: assets.javaLogo },
      { name: "HTML5", icon: assets.javaLogo },
      { name: "CSS3", icon: assets.javaLogo },
      { name: "Tailwind CSS", icon: assets.reactLogo },
      { name: "Vite", icon: assets.javaLogo },,
    ],
    Backend: [
      { name: "Spring Boot", icon: assets.javaLogo },
      { name: "Flask", icon: assets.javaLogo },
    ],
    Tools: [
      { name: "Visual Studio Code", icon: assets.javaLogo },
      { name: "Postman", icon: assets.javaLogo },
      { name: "GitHub", icon: assets.javaLogo },
      { name: "Figma", icon: assets.javaLogo },
    ],
    Others: [
      { name: "MySQL", icon: assets.javaLogo },
      { name: "Git", icon: assets.javaLogo },
    ],
    
  };

  return (
    <section className='homeTech'>
      <div className="homeTechContainer">
        <div className="homeTechHeader">
          <h2 className="homeTechTitle">My Skills</h2>
        </div>
        
        <div className="homeTechContent">
          {Object.entries(techStacks).map(([category, technologies], categoryIndex) => (
            <div key={category} className="homeTechCategory" style={{animationDelay: `${categoryIndex * 0.1}s`}}>              <h3 className="homeTechCategoryTitle">{category}</h3>
              <div className="homeTechGrid">
                {technologies.map((tech, index) => {
                  const cardIndex = categoryIndex * 20 + index; // Unique index for each card
                  return (
                    <div 
                      key={tech.name} 
                      className="homeTechCard homeTechCardMagnetic"
                      style={{animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s`}}
                      ref={el => cardsRef.current[cardIndex] = el}
                    >                      <div 
                        className="homeTechCardContent"
                        ref={el => contentsRef.current[cardIndex] = el}
                      >                        <img 
                          src={tech.icon}
                          alt={tech.name}
                          className="homeTechCardIcon"
                          ref={el => iconsRef.current[cardIndex] = el}
                        />
                        <span 
                          className="homeTechCardName"
                          ref={el => namesRef.current[cardIndex] = el}
                        >
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeTech

// export default HomeTech