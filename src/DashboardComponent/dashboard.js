import React from "react";
import './dashboard.css';
import Profile from './profile.svg';
import Patient from './patient.svg';
import Journal from './journal.svg';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div>
            <p className="p">Hi User,</p>

            <Link to='/profile'>
                <img src={Profile} alt="profile" className="profile" />
            </Link>
            <Link to='/patient'>
                <img src={Patient} alt="patient" className="patient" />
            </Link>
            <Link to='/journal'>
                <img src={Journal} alt="journal" className="journal" />
            </Link>
        </div>
    );
};

export default Dashboard;