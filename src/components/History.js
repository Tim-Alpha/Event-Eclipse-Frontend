import React from "react";
import Header from "./header-footer/Header";
import Footer from "./header-footer/Footer";

const History = () => {
    return (
        <>
            <Header />
            <div>
                <h2>History Page</h2>
                {/* Dummy History Content */}
                <p>History Content</p>
            </div>
            <Footer />
        </>
    );
};

export default History;