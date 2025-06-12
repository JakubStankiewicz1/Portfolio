import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeTech from '../../components/HomeTech/HomeTech';
import HomeProjects from '../../components/HomeProjects/HomeProjects';
import HomeAbout from '../../components/HomeAbout/HomeAbout';
import HomeContactMe from '../../components/HomeContactMe/HomeContactMe';

const Home = () => {
  return (
    <div className='home'>
      <div id="home">
        <HomeHero />
      </div>
      <div id="tech">
        <HomeTech />
      </div>
      <div id="work">
        <HomeProjects />
      </div>
      <div id="about">
        <HomeAbout />
      </div>
      <div id="contact">
        <HomeContactMe />
      </div>
    </div>
  )
}

export default Home
