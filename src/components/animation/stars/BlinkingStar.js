import React, { useEffect, useState } from 'react';
import '../../css/BlinkingStar.css';

const BlinkingStar = () => {
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    useEffect(() => {
        const interval = setInterval(() => {
            const top = Math.random() * window.innerHeight + 'px';
            const left = Math.random() * window.innerWidth + 'px';
            setPosition({ top, left });
        }, 2000); // Change position every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return <div className="star" style={position}></div>;
};

export default BlinkingStar;