import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaComment, FaHistory } from "react-icons/fa";

const BottomBar = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleChatClick = () => {
        navigate("/chat");
    };

    const handleHistoryClick = () => {
        navigate("/history");
    };

    return (
        <footer className="bottom-bar bg-dark text-white text-center py-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="icon-list">
                            <li onClick={handleHomeClick}><FaHome /></li>
                            <li onClick={handleChatClick}><FaComment /></li>
                            <li onClick={handleHistoryClick}><FaHistory /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default BottomBar;
