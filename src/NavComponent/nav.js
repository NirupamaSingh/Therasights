import React from "react";
import icon from ".././images/icon.svg";
import './nav.css';

const Navbar = () => {
    return (
        <header className="header">
          
            <img className="imgIcon" src={icon} alt="icon"></img>
            <ul>
                <li><a href="#about">Dashboard</a></li>
                <li><a href="#projects">About Us</a></li>
                <li><a href="#connect">Helpline No.</a></li>
            </ul>
        </header>
    );
};

export default Navbar;