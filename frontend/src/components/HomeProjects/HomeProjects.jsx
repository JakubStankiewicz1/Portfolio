import React, { useState, useRef, useEffect, useCallback } from 'react';
import './homeProjects.css';

const HomeProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [itemHeight, setItemHeight] = useState(0);
  const listRef = useRef(null);
  const projectRefs = useRef([]);
  const animationFrameRef = useRef(null);
  const projects = [
    {
      name: "TWICE",
      category: "Interaction & Development",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "The Damai",
      category: "Design & Development",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      name: "FABRIC™",
      category: "Design & Development",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      name: "Aanstekelijk",
      category: "Design & Development",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
    if (projectRefs.current[index]) {
      const rect = projectRefs.current[index].getBoundingClientRect();
      setItemHeight(rect.height);
    }
  };  const handleMouseMove = useCallback((e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      if (listRef.current) {
        const listRect = listRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - listRect.left + 20,
          y: e.clientY - listRect.top + 20
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
  }, []);

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section className='homeProjects'>
      <div className="homeProjectsContainer">
        <div className="homeProjectsHeader">
          <span className="homeProjectsLabel">RECENT WORK</span>
        </div>
          <div 
          className="homeProjectsList"
          ref={listRef}
          onMouseMove={handleMouseMove}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="homeProjectsItem"
              ref={el => projectRefs.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="homeProjectsItemContent">
                <h3 className="homeProjectsItemName">{project.name}</h3>
                <span className="homeProjectsItemCategory">{project.category}</span>
              </div>
              {index < projects.length - 1 && <div className="homeProjectsItemLine"></div>}
            </div>
          ))}
            {/* Preview Element that follows cursor */}          <div 
            className={`homeProjectsPreview ${hoveredProject !== null ? 'active' : ''}`}
            style={{ 
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`
            }}
          >
            <div className="homeProjectsPreviewContent">
              <div 
                className="homeProjectsPreviewImage"
                style={{
                  background: hoveredProject !== null ? projects[hoveredProject].color : 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                }}
              >
                {/* Placeholder for future image */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeProjects