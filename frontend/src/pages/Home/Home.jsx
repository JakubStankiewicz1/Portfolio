import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeTech from '../../components/HomeTech/HomeTech';
import HomeProjects from '../../components/HomeProjects/HomeProjects';

const Home = () => {
  return (
    <div className='home'>
      <HomeHero />
      <HomeTech />
      <HomeProjects />
    </div>
  )
}

export default Home
