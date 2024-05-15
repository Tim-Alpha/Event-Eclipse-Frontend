import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const OTPVerification = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log("LOCAL-STORAGE: ", userData)
    const mobileNumber = userData.data.user.mobile;
    console.log(mobileNumber)

    const navigate = useNavigate();

    const [otp, setOtp] = useState({
        digit1: "",
        digit2: "",
        digit3: "",
        digit4: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOtp(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const enteredOTP = `${otp.digit1}${otp.digit2}${otp.digit3}${otp.digit4}`;

            // You can now send this enteredOTP to the backend for verification
            console.log("Entered OTP:", enteredOTP);
            const response = await axios.post("http://localhost:3001/api/v1/users/verify/number", {
                number: mobileNumber,
                otp: enteredOTP
            });

            console.log("Registration Successful:", response.data);
            navigate('/', { state: { userData: userData } })
        } catch (error) {
            console.error("Verification Failed:", error);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="text-center">OTP Verification</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div><p className="text-success">OTP sent to your registered mobile number: {mobileNumber}</p></div>
                                        <div className="col">
                                            <input type="text" id="digit1" name="digit1" className="form-control text-center" value={otp.digit1} onChange={handleChange} maxLength="1" required />
                                        </div>
                                        <div className="col">
                                            <input type="text" id="digit2" name="digit2" className="form-control text-center" value={otp.digit2} onChange={handleChange} maxLength="1" required />
                                        </div>
                                        <div className="col">
                                            <input type="text" id="digit3" name="digit3" className="form-control text-center" value={otp.digit3} onChange={handleChange} maxLength="1" required />
                                        </div>
                                        <div className="col">
                                            <input type="text" id="digit4" name="digit4" className="form-control text-center" value={otp.digit4} onChange={handleChange} maxLength="1" required />
                                        </div>
                                    </div>
                                    <div className="d-grid mt-3">
                                        <button type="submit" className="btn btn-primary">Verify</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OTPVerification;
