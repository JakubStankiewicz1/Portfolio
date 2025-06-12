import React from 'react';
import './urbnctrl.css';

const URBNCTRL = () => {
  return (
    <div className='urbnctrl'>
      <div className="urbnctrlContainer">
        <div className="urbnctrlHeader">
          <h1 className="urbnctrlTitle">URBNCTRL</h1>
          <p className="urbnctrlSubtitle">Urban Management & Control System</p>
        </div>

        <div className="urbnctrlContent">
          <div className="urbnctrlUpdateNotice">
            <div className="urbnctrlUpdateIcon">🚧</div>
            <h2>Page Under Development</h2>
            <p>This project page will be updated with full details by <strong>June 15, 2025</strong></p>
          </div>

          <div className="urbnctrlLinks">
            <a 
              href="https://github.com/JakubStankiewicz1/URBNCTRL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="urbnctrlLink urbnctrlLinkGithub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>

            <div className="urbnctrlComingSoon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Live Site Coming Soon
            </div>
          </div>

          <div className="urbnctrlConstructionInfo">
            <div className="urbnctrlConstructionIcon">🏗️</div>
            <h3>Project Under Construction</h3>
            <p>URBNCTRL is currently under active development and construction. The project is being built with modern technologies and best practices. Full functionality and live deployment are expected to be completed by <strong>June 15, 2025</strong>.</p>
          </div>

          {/* <div className="urbnctrlFeatures">
            <h3>Planned Features</h3>
            <ul className="urbnctrlFeaturesList">
              <li>Urban infrastructure monitoring</li>
              <li>Traffic flow management</li>
              <li>Resource allocation optimization</li>
              <li>Real-time data analytics</li>
              <li>Emergency response coordination</li>
              <li>Smart city dashboard</li>
            </ul>
          </div> */}

          <div className="urbnctrlTechStack">
            <h3>Technologies Used</h3>
            <div className="urbnctrlTechTags">
              <span className="urbnctrlTechTag">React</span>
              <span className="urbnctrlTechTag">JavaScript</span>
              <span className="urbnctrlTechTag">Java</span>
              <span className="urbnctrlTechTag">Spring Boot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default URBNCTRL