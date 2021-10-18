import React from 'react';
import { ButtonGroup, InputGroup, Button, FormControl } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg">
                <div className="container-fluid ">
                    <div className="container-fluid row row-cols-4">
                        <div className="col">
                            <NavLink to="/home">
                                <img src="./image/logo.png" alt="" width="200" height="50" />
                            </NavLink>
                        </div>
                        <div className="col-6">
                            <InputGroup className=" w-100 ">
                                <FormControl
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                        <div className="col">
                            <Link className="px-5" to="/cart">
                                Cart
                            </Link>


                            <Link to="/login">
                                Sing In/Log In
                            </Link>
                        </div>

                        <div className="col">
                            <NavLink to="/home">
                                <img src="./image/Header/medicine.png" alt="" width="50" />
                                Medicine
                            </NavLink>
                        </div>
                        <div className="col">
                            <NavLink to="/home">
                                <img src="./image/Header/Welness.png" alt="" width="50" />
                                Wellness
                            </NavLink>
                        </div>
                        <div className="col">
                            <NavLink to="/home">
                                <img src="./image/Header/Lab.png" alt="" width="50" />
                                Lab Test
                            </NavLink>
                        </div>
                        <div className="col">
                            <NavLink to="/home">
                                <img src="./image/Header/blog.png" alt="" width="50" />
                                Health Blog
                            </NavLink>
                        </div>

                    </div>



                </div>
            </nav>
        </div>
    );
};

export default Header;