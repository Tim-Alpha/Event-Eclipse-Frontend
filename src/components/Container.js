import React from "react";

const getContainerStyles = (props) => {
    return {
        backgroundColor: props.background,
        borderRadius: `${props.corner}px`,
    };
};

const Container = (props) => {
    return (
        <div 
            className={`${props.newClass} p-0`}
            style={getContainerStyles(props)}
        >
            <img className="img-fluid rounded" alt="container" src={props.link} />
        </div>
    );
};

export default Container;
