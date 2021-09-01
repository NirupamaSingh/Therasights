import React from "react";
import Navbar from '../NavComponent/nav'
import './session.css';
import { Link } from 'react-router-dom';
import CompleteApp from '../Twilio-Symbl/src/index';

const Session = () => {

    return (
        <>
            <CompleteApp/>
            <Navbar/>
        </>
    );
};

export default Session;