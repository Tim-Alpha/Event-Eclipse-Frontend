import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router'; 
import Header from '../header-footer/Header'; 
import "../css/Registration.css"; 
import log from "../assets/Log.json"; 
import Lottie from 'lottie-react'; 
import axios from 'axios'; 
import { FaUser, FaEyeSlash, FaEye, FaLock, FaEnvelope, FaCalendarAlt, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; 
import IsMobile from '../../helper/mobileDetection';

const Registration = () => { 
  const [formData, setFormData] = useState({ 
    username: "", 
    firstName: "", 
    lastName: "", 
    password: "", 
    email: "", 
    role: "USER", 
    dob: "", 
    address: "", 
    mobile: "" 
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [disableClass, setDisableClass] = useState("");
  const isMobile = IsMobile();
  const navigate = useNavigate(); 

  useEffect(() => {
    isMobile ? setDisableClass('disableMe') : setDisableClass("");
  }, [isMobile]);

  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData(prevState => ({ 
      ...prevState, 
      [name]: value 
    })); 
  }; 
 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try { 
      const response = await axios.post('https://eventeclipsebackend.onrender.com/api/v1/users', formData); 
      console.log("Registration Successful:", response.data); 
      localStorage.setItem('userData', JSON.stringify({ mobile: formData.mobile })); 
      navigate('/user/verify'); 
    } catch (error) { 
      console.error("Registration Failed:", error); 
      alert("Registration Failed. Please try again."); 
    } 
  }; 
 
  return ( 
    <> 
      <Header /> 
      <div className='main'> 
        <div className="container">
          <form onSubmit={handleSubmit}> 
            <h1>Sign Up</h1> 
            <div className="input-box"> 
              <FaEnvelope className="icon" /> 
              <input type="email" placeholder="Email" id="email" name="email" value={formData.email} onChange={handleChange} required /> 
            </div> 
            <div className="input-box"> 
              <FaLock className="icon" /> 
              <input type={passwordVisible ? "text" : "password"} placeholder="Password" id="password" name="password" value={formData.password} onChange={handleChange} required />
              {formData.password === "" ? (
                <FaLock className='icon'/>
              ) : (
                passwordVisible ? (
                  <FaEyeSlash className='icon' onClick={() => setPasswordVisible(false)} />
                ) : (
                  <FaEye className='icon' onClick={() => setPasswordVisible(true)} />
                )
              )}
            </div> 
            <div className="input-box"> 
              <FaUser className="icon" /> 
              <input type="text" placeholder="Username" id="username" name="username" value={formData.username} onChange={handleChange} required /> 
            </div> 
            <div className="form-row"> 
              <div className="input-box"> 
                <FaUser className="icon" /> 
                <input type="text" placeholder="FirstName" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required /> 
              </div> 
              <div className="input-box"> 
                <FaUser className="icon" /> 
                <input type="text" placeholder="LastName" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required /> 
              </div> 
            </div> 
            <div className="form-row"> 
              <div className="input-box"> 
                <FaCalendarAlt className="icon" /> 
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required /> 
              </div> 
              <div className="input-box"> 
                <FaPhone className="icon" /> 
                <input type="tel" placeholder="Mobile" id="mobile" name="mobile" pattern="[0-9]{10}" value={formData.mobile} onChange={handleChange} required /> 
              </div> 
            </div> 
            <div className="input-box"> 
              <FaMapMarkerAlt className="icon" /> 
              <input type="text" placeholder="Address" id="address" name="address" value={formData.address} onChange={handleChange} required /> 
            </div> 
            <button type="submit"> Register </button> 
            <div className="login-link"> 
              <p onClick={() => navigate('/login')}> 
                Already have an account? <span className='registerHere'>Login here</span>. 
              </p> 
            </div> 
          </form>
          <div className={`animatedSvg ${disableClass}`}>
            <Lottie className={disableClass} animationData={log}/>
          </div>
          </div>
        </div>
    </> 
  ); 
}; 
 
export default Registration;
