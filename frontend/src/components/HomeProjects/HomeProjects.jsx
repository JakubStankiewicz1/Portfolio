import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import "./homeProjects.css";
import assets from "../../assets/assets.js";

const HomeProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [itemHeight, setItemHeight] = useState(0);
  const listRef = useRef(null);
  const projectRefs = useRef([]);
  const animationFrameRef = useRef(null);
  const navigate = useNavigate();const projects = [
    {
      name: "Qitchen",
      technologies: ["React", "JavaScript", "Java", "Spring Boot"],
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: assets.qitchenOne,
      route: "/qitchen"
    },
    {
      name: "Ueloce",
      technologies: ["React", "JavaScript"],
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: assets.ueloceOne,
      route: "/ueloce"
    },
    {
      name: "Rentiva",
      technologies: ["React", "JavaScript", "Java", "Spring Boot"],
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: assets.rentivaOne,
      route: "/rentiva"
    },
    {
      name: "URBNCTRL",
      technologies: ["React", "JavaScript", "Java", "Spring Boot"],
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      image: assets.urbnctrlOne,
      route: "/URBNCTRL"
    },
  ];

  const getTechColor = (tech) => {
    const techColors = {
      'React': { bg: '#e3f2fd', border: '#90caf9', color: '#1565c0' },
      'JavaScript': { bg: '#fff3e0', border: '#ffcc80', color: '#e65100' },
      'Java': { bg: '#fff3e0', border: '#ffab91', color: '#d84315' },
      'Python': { bg: '#e8f5e8', border: '#a5d6a7', color: '#2e7d32' },
      'HTML': { bg: '#fff3e0', border: '#ffab91', color: '#e65100' },
      'CSS': { bg: '#e3f2fd', border: '#81c784', color: '#1976d2' },
      'Tailwind': { bg: '#e0f2f1', border: '#80cbc4', color: '#00695c' },
      'Vite': { bg: '#f3e5f5', border: '#ce93d8', color: '#7b1fa2' },
      'Spring Boot': { bg: '#e8f5e8', border: '#a5d6a7', color: '#388e3c' },
      'Flask': { bg: '#fce4ec', border: '#f8bbd9', color: '#c2185b' },
      'Figma': { bg: '#fff3e0', border: '#ffcc80', color: '#f57c00' },
      'Git': { bg: '#fff3e0', border: '#ffab91', color: '#d84315' },
    };
    return techColors[tech] || { bg: '#f8f9fa', border: '#e9ecef', color: '#495057' };
  };

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
    if (projectRefs.current[index]) {
      const rect = projectRefs.current[index].getBoundingClientRect();
      setItemHeight(rect.height);
    }
  };
  const handleMouseMove = useCallback((e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (listRef.current) {
        const listRect = listRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - listRect.left + 20,
          y: e.clientY - listRect.top + 20,
        });
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);  const handleMouseLeave = () => {
    setHoveredProject(null);
  };
  const handleProjectClick = (project) => {
    navigate(project.route);
  };

  const getPreviewBackgroundColor = (index) => {
    const colors = [
      '#E8E8E8', // Pierwszy - jasny szary
      '#D1D1D1', // Drugi - średni szary  
      '#BABABA', // Trzeci - ciemniejszy szary
      '#1a1a1a'  // Czwarty - czarny
    ];
    return colors[index] || '#F1F1F1';
  };

  return (
    <section className="homeProjects">
      <div className="homeProjectsContainer">
        <div className="homeProjectsHeader">
          <span className="homeProjectsLabel">RECENT WORK</span>
        </div>
        <div className="homeProjectsList" ref={listRef} onMouseMove={handleMouseMove}>
          {projects.map((project, index) => (            <div
              key={index}
              className="homeProjectsItem"
              ref={(el) => (projectRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleProjectClick(project)}
            ><div className="homeProjectsItemContent">
                <h3 className="homeProjectsItemName">{project.name}</h3>
                <div className="homeProjectsItemTechnologies">
                  {project.technologies.map((tech, techIndex) => {
                    const techColor = getTechColor(tech);
                    return (
                      <span 
                        key={techIndex} 
                        className="homeProjectsItemTech"
                        style={{
                          backgroundColor: techColor.bg,
                          borderColor: techColor.border,
                          color: techColor.color
                        }}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
              {index < projects.length - 1 && <div className="homeProjectsItemLine"></div>}
            </div>
          ))}
          {/* Preview Element that follows cursor */}{" "}
          <div
            className={`homeProjectsPreview ${hoveredProject !== null ? "active" : ""}`}
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          >
            {" "}



            <div 
              className="homeProjectsPreviewContent"
              style={{
                backgroundColor: hoveredProject !== null ? getPreviewBackgroundColor(hoveredProject) : '#F1F1F1'
              }}
            >              <div className="homeProjectsPreviewContentContainer">
                <div className="homeProjectsPreviewContentContainerImg">
                  <img
                    alt={hoveredProject !== null ? projects[hoveredProject].name : "Project"} 
                    className="homeProjectsPreviewContentContainerImgImage" 
                  />
                </div>
              </div>
            </div>















          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
