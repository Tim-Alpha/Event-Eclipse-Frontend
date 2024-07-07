import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Header from '../header-footer/Header';
// import Footer from '../header-footer/Footer'; 
import "../css/Login.css"; 
import log from "../assets/Log.json";
import Lottie from 'lottie-react'; 
import { FaUser, FaLock } from "react-icons/fa"; 
import axios from 'axios'; 

const Login = () => { 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate(); 

  const handleLogin = async (e) => { 
    e.preventDefault(); 
    try { 
      const response = await axios.post('https://eventeclipsebackend.onrender.com/api/v1/users/login', {  
        username: username,  
        password: password  
      }); 

      const data = response.data; 

      if (data.status === 'success') { 
        localStorage.setItem('token', data.token); 
        alert('Login successful'); 
        navigate('/home'); 
      } else { 
        alert('Login failed: ' + data.message); 
      } 
    } catch (error) { 
      console.error("Login Failed:", error); 
      alert("Login Failed. Please try again."); 
    } 
  }; 

  return ( 
    <> 
      <Header /> 
      <div className='main'> 
        <div style={{ width: "25%"}}> 
          <Lottie animationData={log}/> 
        </div> 
        <div className="container"> 
          <form onSubmit={handleLogin}> 
            <h1>Login</h1> 
            <div className="input-box"> 
              <input 
                type="text" 
                placeholder="Username" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              /> 
              <FaUser className='icon'/> 
            </div> 
            <div className="input-box"> 
              <input 
                type="password" 
                placeholder='Password' 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              /> 
              <FaLock className='icon'/> 
            </div> 

            <div className="remember"> 
              <label><input type="checkbox"/>Remember me</label> 
              <p type="button" className="forgot-password" onClick={() => navigate('/forgot-password')}>Forgot Password?</p> 
            </div> 

            <button type="submit"> Login </button> 
            <div className="register-link"> 
              <p onClick={() => navigate('/register')}> 
                Don't have an account? Register here. 
              </p> 
            </div> 
          </form> 
        </div> 
        {/* <Footer /> */} 
      </div> 
    </> 
  ); 
}; 

export default Login;
