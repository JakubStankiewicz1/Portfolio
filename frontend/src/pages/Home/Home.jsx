import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeTech from '../../components/HomeTech/HomeTech';
import HomeProjects from '../../components/HomeProjects/HomeProjects';
import HomeAbout from '../../components/HomeAbout/HomeAbout';

const Home = () => {
  return (
    <div className='home'>
      <HomeHero />
      <HomeTech />
      <HomeProjects />
      <HomeAbout />
    </div>
  )
}

export default Home
