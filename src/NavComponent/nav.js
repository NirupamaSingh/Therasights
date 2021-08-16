import React from "react";
import icon from "./icon.svg";
import './nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header">
            <Link to="/home">
                <img className="imgIcon" src={icon} alt="icon"></img>
            </Link>
            <ul>
                <Link to="/profile"> <li>Profile</li> </Link>
                <li>About Us</li>
                <li>Helpline No.</li>
            </ul>
        </header>
    );
};

export default Navbar;