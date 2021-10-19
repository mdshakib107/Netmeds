import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div >
            <div className="bg">
                <Navbar expand="lg" >
                    <Container className="me-auto">
                        <NavLink to="/">
                            <img src="./image/logo.png" alt="" width="200" height="50" />
                        </NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <Link className="text-decoration-none text-white fw-bold fs-5 p-2 " to="/productmedicine">

                                    <img src="./image/Header/medicine.png" alt="" width="50" />
                                    Medicine

                                </Link>
                                <Link className="text-white fw-bold fs-5  text-decoration-none p-2" to="/productwellness">
                                    <img src="./image/Header/Welness.png" alt="" width="50" />
                                    Wellness

                                </Link>
                                <Link className="text-decoration-none text-white fw-bold fs-5 p-2" to="/labtest">
                                    <img src="./image/Header/Lab.png" alt="" width="50" />
                                    Lab Test

                                </Link>
                                <Link className="text-decoration-none text-white fw-bold fs-5 p-2" to="/blog">
                                    <img src="./image/Header/blog.png" alt="" width="50" />
                                    Health Blog


                                </Link>
                                <Link to="/register" className="text-decoration-none text-white fw-bold fs-5 p-3 mx-auto">
                                    <i className="fas fa-user-circle text-white fw-bold fs-5"></i> Sing In/Log In
                                </Link>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        </div>
    );
};

export default Header;
