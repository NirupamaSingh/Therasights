import React from "react";
import './patient.css';
import PatientLogo from './patientLogo.svg';
import Dashboard from '../DashboardComponent/dashboard';
import PatientBut from './patientBut.svg';
import SessionBut from './sessionBut.svg';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <Dashboard />
            <img src={PatientLogo} alt="patient" className="patientLogo" />
            <Link to='/addPatient'>
                <img src={PatientBut} alt="patientBut" className="patientBut" />
            </Link>
            <Link to='./createSession'>
                <img src={SessionBut} alt="sessionBut" className="sessionBut" />
            </Link>


            <div className="bgImgPat">

            </div>
        </div>
    );
};

export default Profile;