import React, { useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Sign-Up')
    const navigate = useNavigate();

    const onSignUp = () => {
        navigate('/auth');
        setLoginBtn('login')
    }
    return (
        <>
            <div className="header_container">
                <div className="header_logo_container"></div>
                <div className="header_btn_container">
                    <button className="login_btn" onClick={onSignUp}>{loginBtn}</button>
                </div>
            </div>
                
        </>
    )
}

export default Header;