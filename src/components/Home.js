import React from "react";
import Container from "./Container";
import Footer from "./Footer";

const Home = () => {

    return (
        <>
            <div className="home_top_container"></div>
            <div className="home_bottom_container">
                <div className="slight_up" id="slight_up">
                    <Container newClass="small_box" width="30" height="30" background="green" corner="20" />
                    <Container newClass="small_box" width="30" height="30" background="green" corner="20" />
                    <Container newClass="small_box" width="30" height="30" background="green" corner="20" />
                    <Container newClass="small_box" width="30" height="30" background="green" corner="20" />
                    <Container newClass="small_box" width="30" height="30" background="green" corner="20" />
                </div>
                <div className="venue_container">
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                    <Container newClass="container" width="30" height="40" background="pink" corner="20" />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
};

export default Home;
