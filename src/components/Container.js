import React from "react";

const getContainerStyles = (props) => {
    return {
        width: `${props.width}%`,
        height: `${props.height}vh`,
        backgroundColor: props.background,
        borderRadius: `${props.corner}px`,
        margin: '10px',
    };
};

const Container = (props) => {
    return (
        <div 
            className={`${props.newClass}`}
            style={getContainerStyles(props)}
        ></div>
    );
};

export default Container;
