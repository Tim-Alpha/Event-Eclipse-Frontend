import React, { useState, useEffect } from "react";
import img5 from "./images/img5.jpeg";
import img6 from "./images/img6.jpeg";
import img7 from "./images/img7.webp";
import img8 from "./images/img8.webp";

const TopContainer = () => {
    const images = [img7, img6, img8, img5];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <div className="home_top_container">
                <div className="slight_up" id="slight_up">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            className="container_image"
                            alt={`test ${index}`}
                            src={img}
                            style={{ display: index === currentImageIndex ? "block" : "none" }}
                        />
                    ))}
                    <div className="dots-container">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === currentImageIndex ? "active" : ""}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopContainer;
