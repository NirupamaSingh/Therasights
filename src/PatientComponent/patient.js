import React from "react";
import './patient.css';
import PatientLogo from './patientLogo.svg';
import Dashboard from '../DashboardComponent/dashboard';

const Profile = () => {
    return (
        <div>
            <Dashboard />
            <img src={PatientLogo} alt="patient" className="patientLogo" />
            <div className="bgImgPat">

            </div>
        </div>
    );
};

export default Profile;