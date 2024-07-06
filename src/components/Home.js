import React from 'react';
import Header from './Header';
import StarField from '../StarField';

const Home = () => {

  return (
    <>    
    <Header />
    <div className='home-page'>
      <StarField />
      <div className='hero-section' >
        <h1 className='hero-heading' >Event Ecliplse</h1>
        <p className='hero-text' >Welcome to EventEcliplse, The Revolutionary Digital Heaven for finding and booking event venues</p>
      </div>
    </div>
    </>
  );
};

export default Home;
