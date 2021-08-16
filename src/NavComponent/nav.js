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
                <li><a href="#about">Dashboard</a></li>
                <li><a href="#projects">About Us</a></li>
                <li><a href="#connect">Helpline No.</a></li>
            </ul>
        </header>
    );
};

export default Navbar;