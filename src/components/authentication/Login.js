import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';
import "../css/Login.css";
import log from "../assets/Log.json";
import Lottie from 'lottie-react';
import { FaUser, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import axios from 'axios';
import IsMobile from '../../helper/mobileDetection';
import Loader from '../../helper/Loader';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [disableClass, setDisableClass] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isMobile = IsMobile();

  useEffect(() => {
    isMobile ? setDisableClass('disableMe') : setDisableClass("");
  }, [isMobile]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://eventeclipsebackend.onrender.com/api/v1/users/login', {
        username: username,
        password: password
      });
      const data = response.data;

      if (data.status === 'success') {
        if (isChecked) {
          localStorage.setItem('token', data.token);
        }

        alert('Login successful');
        navigate('/home');
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error("Login Failed:", error);
      alert("Login Failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Header />
      <div>
        <div className='main'>
          <div className="container">
            <div className={`animatedSvg ${disableClass}`}>
              <Lottie className={disableClass} animationData={log} />
            </div>
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
                <FaUser className='icon' />
              </div>
              <div className="input-box">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder='Password'
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {password === "" ? (
                  <FaLock className='icon' />
                ) : (
                  passwordVisible ? (
                    <FaEyeSlash className='icon' onClick={() => setPasswordVisible(false)} />
                  ) : (
                    <FaEye className='icon' onClick={() => setPasswordVisible(true)} />
                  )
                )}
              </div>

              <div className="remember">
                <label className={`rememberMe ${isChecked ? 'onRememberMe' : ''}`}>
                  <input
                    type="checkbox"
                    name='check'
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />Remember me
                </label>
                <p type="button" className="forgot-password" onClick={() => navigate('/forgot-password')}>Forgot Password?</p>
              </div>

              <button type="submit"> Login </button>
              <div className="register-link">
                <p onClick={() => navigate('/register')}>
                  Don't have an account? <span className='registerHere'>Register here</span>.
                </p>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
