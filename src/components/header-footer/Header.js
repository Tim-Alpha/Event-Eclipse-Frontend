import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import "../css/Header.css";
import IsLoggedIn from "../authentication/IsLoggedIn";
import defaultProfilePicture from "../images/user.png";

const Header = () => { 
    const navigate = useNavigate(); 
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);
    const [userProfile, setUserProfile] = useState(defaultProfilePicture);

    useEffect(() => {
        const token = IsLoggedIn();
        setToken(token);

        if (token) {
            const fetchUserProfile = async () => {
                try {
                    const response = await axios.get('https://eventeclipsebackend.onrender.com/api/v1/users/profile', {
                        headers: { 'event-token': token }
                    });
                    const user = response.data.user;
                    console.log(user)
                    setUser(user);
                    localStorage.setItem('user', JSON.stringify(user));
                    setUserProfile(user.profileUrl || defaultProfilePicture);
                } catch (error) {
                    console.error('Failed to fetch user profile:', error);
                }
            };
            fetchUserProfile();
        }
    }, [token]);

    return ( 
        <> 
            <nav> 
                <div className='logo' onClick={() => navigate('/')}> 
                    <span className='logo-1'>Event</span> 
                    <span className='logo-2'>Eclipse</span> 
                </div> 
                <div className='auth-buttons'> 
                    { !token ? 
                        <button className='login-button' onClick={() => navigate('/login')}>Login</button> :
                        user && 
                        <div className="profile-container">
                            <img 
                                src={userProfile} 
                                alt="Profile" 
                                className="profile-picture" 
                            />
                            <span className="userName">{user.username}</span>
                        </div>
                    }
                </div> 
            </nav> 
        </> 
    ); 
}; 

export default Header;
