import React from 'react';
import './QitchenHeroThree.css';
import assets from '../../assets/assets';

const QitchenHeroThree = () => {
  return (
    <div className='QitchenHeroThree'>
        <div className="QitchenHeroThreeContainer">
            <div className="QitchenHeroThreeContainerDiv">

                {/* Top Part */}
                <div className="QitchenHeroThreeContainerDivTop">
                    <div className="QitchenHeroThreeContainerDivTopContainer">
                      {/* Image One */}
                      <div className="QitchenHeroThreeContainerDivTopContainerOne">
                        <div className="QitchenHeroThreeContainerDivTopContainerOneContainer">
                          <img src={assets.notebook} alt="" className='QitchenHeroThreeContainerDivTopContainerOneContainerImage' />
                        </div>
                      </div>

                      {/* Image Two */}
                      <div className="QitchenHeroThreeContainerDivTopContainerTwo">
                        <div className="QitchenHeroThreeContainerDivTopContainerTwoContainer">
                          <img src={assets.qitchenTwo} alt="" className='QitchenHeroThreeContainerDivTopContainerTwoContainerImage' />
                        </div>
                      </div>
                    </div>
                </div>
                
                {/* Bottom Part */}
                <div className="QitchenHeroThreeContainerDivBottom">
                  <div className="QitchenHeroThreeContainerDivBottomContainer">
                    {/* One */}
                    <div className="QitchenHeroThreeContainerDivBottomContainerOne">
                      <div className="QitchenHeroThreeContainerDivBottomContainerOneContainer"></div>
                    </div>

                    {/* Two */}
                    <div className="QitchenHeroThreeContainerDivBottomContainerTwo">
                      <div className="QitchenHeroThreeContainerDivBottomContainerTwoContainer"></div>
                    </div>

                    {/* Three */}
                    <div className="QitchenHeroThreeContainerDivBottomContainerThree">
                      <div className="QitchenHeroThreeContainerDivBottomContainerThreeContainer"></div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default QitchenHeroThree