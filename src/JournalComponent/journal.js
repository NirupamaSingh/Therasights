import React from "react";
import Navbar from '../NavComponent/nav'
import './journal.css';
import JournalLogo from './journalLogo.svg';
import Dashboard from '../DashboardComponent/dashboard';

const Profile = () => {
    return (
        <>
        <div>
            <Dashboard />
            <img src={JournalLogo} alt="journal" className="journalLogo" />
            <div className="bgImgJour">

            </div>
        </div>
        <Navbar/>
        </>
    );
};

export default Profile;