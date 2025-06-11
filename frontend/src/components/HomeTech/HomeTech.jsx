import React from 'react';
import assets from '../../assets/assets.js';
import PixelCard from '../PixelCard/PixelCard.jsx';
import "./homeTech.css";

const HomeTech = () => {
  const techStacks = {
    DEVELOPMENT: [
      { name: "JavaScript", icon: assets.javascriptLogo },
      { name: "React.js", icon: assets.reactLogo },
      { name: "HTML5", icon: assets.htmlLogo },
      { name: "CSS3", icon: assets.cssLogo },
      { name: "Python", icon: assets.pythonLogo },
      { name: "Java", icon: assets.javaLogo },
      { name: "Tailwind CSS", icon: assets.tailwindLogo },
      { name: "Spring Boot", icon: assets.springBootLogo },
      { name: "Flask", icon: assets.flaskLogo },
    ],
    "TOOLS & DESIGN": [
      { name: "Visual Studio Code", icon: assets.vsCode },
      { name: "Figma", icon: assets.figmaLogo },
      { name: "Postman", icon: assets.postmanLogo },
      { name: "Jira", icon: assets.jiraLogo },
      { name: "Vite", icon: assets.viteLogo },
    ],
    SERVICES: [
      { name: "GitHub", icon: assets.githubLogo },
      { name: "Git", icon: assets.gitLogo },
    ],
  };

  return (    <section className='homeTech'>
      <div className="homeTechContainer">
        <div className="homeTechHeader">
          <h2 className="homeTechTitle">TECHNOLOGIES I USE</h2>
        </div><div className="homeTechContent">
          <div className="homeTechSkillsSection">
            {Object.entries(techStacks).map(([category, technologies], categoryIndex) => (
              <div key={category} className="homeTechCategory" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                <h3 className="homeTechCategoryTitle">{category}</h3>                <div className="homeTechGrid">
                  {technologies.map((tech, index) => (
                    <PixelCard 
                      key={tech.name}
                      variant="tech"
                      className="pixel-tech-card"
                      style={{animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s`}}
                    >
                      <div className="homeTechCardContent">
                        <img 
                          src={tech.icon}
                          alt={tech.name}
                          className="homeTechCardIcon"
                        />
                        <span className="homeTechCardName">
                          {tech.name}
                        </span>
                      </div>
                    </PixelCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTech