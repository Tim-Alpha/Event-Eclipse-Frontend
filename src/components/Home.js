import React, { useEffect, useState } from 'react';
import Container from './Container';
import Footer from './Footer';
import TopContainer from './TopContainer';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpeg';
import img6 from './images/img6.jpeg';
import img7 from './images/img7.webp';
import img8 from './images/img8.webp';
import Header from './Header';
import SignupPopup from './SignupPopup';
import { isLoggedIn } from '../helper/auth';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!isLoggedIn()) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Header />
      <TopContainer />
      <div className="container mt-4">
        <div className="row">
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img1} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img2} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img3} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img4} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img5} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img6} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img7} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img8} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img1} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img2} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img3} />
          <Container newClass="col-12 col-md-6 col-lg-3 mb-4" width="100" height="40" background="" corner="8" link={img4} />
        </div>
      </div>
      <Footer />
      {showPopup && <SignupPopup onClose={handleClosePopup} />}
    </>
  );
};

export default Home;
