import React from "react";
import img5 from "./images/img5.jpeg"
import img6 from "./images/img6.jpeg"
import img7 from "./images/img7.webp"
import img8 from "./images/img8.webp"

const TopContainer = () => {
    return (
        <>
            <div className="home_top_container">
                <div className="slight_up" id="slight_up">
                    <img className="container_image" alt="test" src={img7} />
                    <img className="container_image" alt="test" src={img6} />
                    <img className="container_image" alt="test" src={img8} />
                    <img className="container_image" alt="test" src={img5} />
                </div>
            </div>
        </>
    )
}

export default TopContainer;