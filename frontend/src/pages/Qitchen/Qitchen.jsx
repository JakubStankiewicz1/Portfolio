import React from 'react';
import './qitchen.css';

const Qitchen = () => {
  return (
    <div className='qitchen'>
      <div className="qitchenContainer">
        <div className="qitchenHeader">
          <h1 className="qitchenTitle">Qitchen</h1>
          {/* <p className="qitchenSubtitle">Food Ordering Platform</p> */}
        </div>

        <div className="qitchenContent">
          <div className="qitchenUpdateNotice">
            <div className="qitchenUpdateIcon">🚧</div>
            <h2>Page Under Development</h2>
            <p>This project page will be updated with full details by <strong>June 15, 2025</strong></p>
          </div>          <div className="qitchenLinks">
            <a 
              href="https://github.com/JakubStankiewicz1/Qitchen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="qitchenLink qitchenLinkGithub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>

            <a 
              href="https://qitchen-frontend.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="qitchenLink qitchenLinkLive"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              View Live Site
            </a>

            <a 
              href="https://qitchen-admin.onrender.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="qitchenLink qitchenLinkAdmin"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
              Admin Panel
            </a>
          </div>

          <div className="qitchenAdminInfo">
            <h3>Admin Access</h3>
            <div className="qitchenCredentials">
              <div className="qitchenCredential">
                <span className="qitchenCredentialLabel">Login:</span>
                <span className="qitchenCredentialValue">admin</span>
              </div>
              <div className="qitchenCredential">
                <span className="qitchenCredentialLabel">Password:</span>
                <span className="qitchenCredentialValue">admin</span>
              </div>
            </div>
          </div>

          <div className="qitchenServerInfo">
            <div className="qitchenServerIcon">⚡</div>
            <h3>Server Information</h3>
            <p>Current server configuration automatically shuts down after <strong>15 minutes</strong> of inactivity. The first request after a longer period of inactivity may take some time to respond as the server needs to restart, but subsequent requests will work normally.</p>
          </div>

          <div className="qitchenTechStack">
            <h3>Technologies Used</h3>
            <div className="qitchenTechTags">
              <span className="qitchenTechTag">React</span>
              <span className="qitchenTechTag">JavaScript</span>
              <span className="qitchenTechTag">Java</span>
              <span className="qitchenTechTag">Spring Boot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qitchen