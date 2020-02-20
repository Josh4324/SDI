import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div class="footer">
                <p>Copyright 2020 © Spatial Data Infrastructure (SDI) and The University of Lagos.</p>
                <nav>
                    <NavLink className="flink" to="/">Home</NavLink>
                    <NavLink className="flink" to="/">Privacy Policy</NavLink>
                    <NavLink className="flink" to="/">Contact Us</NavLink>
                    <NavLink className="flink" to="/">Terms of Use</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Footer;
