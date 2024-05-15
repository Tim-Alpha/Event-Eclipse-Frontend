import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

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

    const navigate = useNavigate();

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
            const response = await axios.post("http://localhost:3001/api/v1/users", formData);
            console.log("Registration Successful:", response.data);
            // Reset form fields after successful registration if needed

            navigate('/user/verify', { state: { userData: formData } });

            setFormData({
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
        } catch (error) {
            console.error("Registration Failed:", error);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="text-center">Sign-Up</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username:</label>
                                        <input type="text" id="username" name="username" className="form-control" value={formData.username} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                        <input type="password" id="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dob" className="form-label">Date of Birth:</label>
                                        <input type="date" id="dob" name="dob" className="form-control" value={formData.dob} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Address:</label>
                                        <input type="text" id="address" name="address" className="form-control" value={formData.address} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mobile" className="form-label">Mobile:</label>
                                        <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" className="form-control" value={formData.mobile} onChange={handleChange} required />
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration;
