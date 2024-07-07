import React from 'react';
import '../components/css/Loader.css';

const Loader = () => {
  return (
    <div className='container-loader'>
      <div className="loader-container">
        <div className="loader"></div>
        <p className='loader-text'>
          <span className='span-loading'>
            <span className="dot">p</span>
            <span className="dot">r</span>
            <span className="dot">o</span>
            <span className="dot">c</span>
            <span className="dot">e</span>
            <span className="dot">s</span>
            <span className="dot">s</span>
            <span className="dot">i</span>
            <span className="dot">n</span>
            <span className="dot">g</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
