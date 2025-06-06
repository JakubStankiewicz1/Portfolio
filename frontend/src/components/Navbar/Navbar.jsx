import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className="navbarContainer">
            <div className="navbarContainerDiv">
                {/* Left Part */}
                <div className="navbarContainerDivLeft">
                    <div className="navbarContainerDivLeftContainer">
                        <div className="navbarContainerDivLeftContainerButton">
                            <div className="navbarContainerDivLeftContainerButtonContainer">
                                <p className="navbarContainerDivLeftContainerButtonContainerText">
                                    ©Code By Jakub Stankiewicz
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Part */}
                <div className="navbarContainerDivRight">
                    <div className="navbarContainerDivRightContainer"></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
