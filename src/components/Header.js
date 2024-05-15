import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Sign-Up');
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 550);
        };

        handleResize(); // Call it initially to set isMobile
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onSignUp = () => {
        navigate('/auth');
        setLoginBtn('Login');
    };

    return (
        <>
            {isMobile ? (
                <nav className="navbar bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">Event Eclipse</Link> {/* Use Link instead of a */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            ) : (
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">Event Eclipse</Link> {/* Use Link instead of a */}
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <button className="btn btn-primary ms-2" onClick={onSignUp}>{loginBtn}</button>
                    </div>
                </nav>
            )}

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">Home</Link> {/* Use Link instead of a */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link> {/* Use Link instead of a */}
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> {/* Use Link instead of a */}
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Action</Link></li> {/* Use Link instead of a */}
                                <li><Link className="dropdown-item" to="#">Another action</Link></li> {/* Use Link instead of a */}
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li> {/* Use Link instead of a */}
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex mt-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="w-90 mx-auto mt-3"> {/* Style to make the button 90% width and center it */}
                        <button className="btn btn-outline-success w-100" onClick={onSignUp}>{loginBtn}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
