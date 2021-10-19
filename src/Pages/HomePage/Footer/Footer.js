import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><Link to="">watch</Link></li>
                            <li><Link to="">bag</Link></li>
                            <li><Link to="">shoes</Link></li>
                            <li><Link to="">dress</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><Link to="">watch</Link></li>
                            <li><Link to="">bag</Link></li>
                            <li><Link to="">shoes</Link></li>
                            <li><Link to="">dress</Link></li>
                            <li><Link to="">dress</Link></li>
                            <li><Link to="">dress</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><Link to="">watch</Link></li>
                            <li><Link to="">bag</Link></li>
                            <li><Link to="">shoes</Link></li>
                            <li><Link to="">dress</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <Link to=""><i className="fab fa-twitter"></i></Link>
                            <Link to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link to=""><i className="fab fa-instagram"></i></Link>
                            <Link to=""><i className="fab fa-linkedin-in"></i></Link >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;