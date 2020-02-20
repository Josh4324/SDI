import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <header className="header">
                <nav className="nav">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/">About</NavLink>
                    <NavLink className="nav-link" to="">Resources</NavLink>
                    <NavLink className="nav-link" to="#">Contact Us</NavLink>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
