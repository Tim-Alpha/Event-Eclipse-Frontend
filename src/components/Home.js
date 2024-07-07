import React from 'react';
import Header from './header-footer/Header';
import StarField from './animation/stars/StarField';
import BlinkingStar from './animation/stars/BlinkingStar';
import FireworksBackground from './animation/fireworks/FireworksBackground';
import Footer from './header-footer/Footer';

const Home = () => {

  return (
    <>    
    <Header />
    <div className='home-page'>
      <StarField />
      <BlinkingStar />
      <FireworksBackground />
      <div className='hero-section' >
        <div className='hero-main-heading'>
          <h1 className='hero-heading' >Event Eclipse</h1>
          <p className='hero-text' >Welcome to EventEclipse, The Revolutionary Digital Heaven for finding and booking event venues</p>
        </div>
      </div>
      <div className='about-section' >
        <div className='hero-main-heading'>
          <h1 className='hero-heading' >Why We?</h1>
          <p className='hero-text' >Welcome to EventEclipse, The Revolutionary Digital Heaven for finding and booking event venues</p>
        </div>
      </div>
      <div className='service-section' >
        <div className='hero-main-heading'>
          <h1 className='hero-heading' >Venue Near You</h1>
          <p className='hero-text' >Welcome to EventEclipse, The Revolutionary Digital Heaven for finding and booking event venues</p>
        </div>
      </div>
      <div className='customer-section' >
        <div className='hero-main-heading'>
          <h1 className='hero-heading' >Happy Customers</h1>
          <p className='hero-text' >Welcome to EventEclipse, The Revolutionary Digital Heaven for finding and booking event venues</p>
        </div>
      </div>
    </div> 
    <Footer />
    </>
  );
};

export default Home;
