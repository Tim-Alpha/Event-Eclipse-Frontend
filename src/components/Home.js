import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import TopContainer from "./TopContainer";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpeg"
import img4 from "./images/img4.jpeg"
import img5 from "./images/img5.jpeg"
import img6 from "./images/img6.jpeg"
import img7 from "./images/img7.webp"
import img8 from "./images/img8.webp"
import Header from "./Header";

const Home = () => {

    return (
        <>
            <Header />
            <TopContainer />
            <div className="home_bottom_container">
                {/* <div className="slight_up" id="slight_up">
                    <Container newClass="small_box" width="30" height="30" background="green" corner="20" />
                    <Container newClass="small_box" width="30" height="30" background="green" corner="20" />
                    <Container newClass="small_box" width="30" height="30" background="green" corner="20" />
                    <Container newClass="small_box" width="30" height="30" background="green" corner="20" />
                    <Container newClass="small_box" width="30" height="30" background="green" corner="20" />
                </div> */}
                <div className="venue_container">
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img1}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img2}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img3}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img4}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img5}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img6}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img7}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img8}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img1}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img2}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img3}/>
                    <Container newClass="container" width="30" height="40" background="" corner="8" link={img4}/>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
};

export default Home;
