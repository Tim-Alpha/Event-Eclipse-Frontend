import React from "react"; 
import { useNavigate } from "react-router-dom"; 
import "../css/Header.css" 
const Header = () => { 
    const navigate = useNavigate(); 
 
    return ( 
        <> 
            <nav> 
            <div className='logo' onClick={() => navigate('/')}> 
                    <span className='logo-1'>Event</span> 
                    <span className='logo-2'>Eclipse</span> 
                </div> 
                <div className='auth-buttons'> 
                    <button className='login-button' onClick={() => navigate('/login')}>Login</button> 
                    <button className='registration-button' onClick={() => navigate('/register')}>Register</button> 
                </div> 
            </nav> 
        </> 
    ); 
}; 
 
export default Header;
