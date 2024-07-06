import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPopup = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Join Us!</h2>
        <button className="create-account-btn" onClick={() => navigate('/register')}>Create Account</button>
      </div>
    </div>
  );
};

export default SignupPopup;
