import React from 'react';
import './qitchen.css';
import QitchenHero from '../../components/QitchenHero/QitchenHero';
import QitchenHeroThree from '../../components/QitchenHeroThree/QitchenHeroThree';

const Qitchen = () => {
  return (
    <div className='qitchen'>
      <QitchenHero />
      <QitchenHeroThree />
    </div>
  )
}

export default Qitchen