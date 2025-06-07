import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeTech from '../../components/HomeTech/HomeTech';

const Home = () => {
  return (
    <div className='home'>
      <HomeHero />
      <HomeTech />
    </div>
  )
}

export default Home
