import React from "react";
import Header from "./header-footer/Header";
import Footer from "./header-footer/Footer";

const Chat = () => {
    return (
        <>
            <Header />
            <div>
                <h2>Chat Page</h2>
                <div>
                    <p>Chat 1</p>
                    <p>Chat 2</p>
                    <p>Chat 3</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Chat;