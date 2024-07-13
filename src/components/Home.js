import React from 'react';
import Header from './header-footer/Header';
import StarField from './animation/stars/StarField';
import BlinkingStar from './animation/stars/BlinkingStar';
// import FireworksBackground from './animation/fireworks/FireworksBackground';
import Footer from './header-footer/Footer';
import WhyWe from './images/whyWe.png';
import './css/Home.css';

const Home = () => {

  return (
    <>    
    <Header />
    <div className='home-page'>
      <StarField />
      <BlinkingStar />
      {/* <FireworksBackground /> */}
      <div className='hero-section' >
        <div className='hero-main-heading'>
          <h1 className='hero-heading' >Event Eclipse</h1>
          <p className='hero-text' >Welcome to EventEclipse, The Revolutionary Digital Heaven for finding and booking event venues</p>
        </div>
      </div>

      <div className='about-section'>
        <div className='about-main-heading'>
          <img className='why-we' alt='why-we' src={WhyWe} />

          {/* Card at 12 o'clock */}
          <div className="card" style={{ bottom: '550px', right: '0%' }}>
            {/* <img src="path_to_your_icon.png" alt="icon"/> */}
            <p>Advanced Venue Search Tool</p>
          </div>

          {/* Card at 2 o'clock */}
          <div className="card" style={{ bottom: '460px', left: '35%' }}>
            {/* <img src="path_to_your_icon.png" alt="icon"/> */}
            <p>Interactive Venue Maps</p>
          </div>

          {/* Card at 4 o'clock */}
          <div className="card" style={{ bottom: '270px', left: '35%' }}>
            {/* <img src="path_to_your_icon.png" alt="icon"/> */}
            <p>Virtual Venue Tours</p>
          </div>

          {/* Card at 8 o'clock */}
          <div className="card" style={{ bottom: '340px', right: '30%' }}>
            {/* <img src="path_to_your_icon.png" alt="icon"/> */}
            <p>Dynamic Event Planning Toolkit</p>
          </div>

          {/* Card at 10 o'clock */}
          <div className="card" style={{ bottom: '720px', right: '35%' }}>
            {/* <img src="path_to_your_icon.png" alt="icon"/> */}
            <p>Community Forum and Reviews Section</p>
          </div>
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
