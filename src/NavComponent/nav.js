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
                <Link to="/aboutUs"> <li>About Us</li> </Link>
                <Link to="/helpline"> <li>Helpline No.</li> </Link>
            </ul>
        </header>
    );
};

export default Navbar;