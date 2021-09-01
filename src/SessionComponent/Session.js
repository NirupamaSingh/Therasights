import React from "react";
import './session.css';
import { Link } from 'react-router-dom';
import CompleteApp from '../Twilio-Symbl/src/index';

const Session = () => {

    return (
        <>
            <CompleteApp/>
            <Link to="/mseForm">
                <button className="endButton">End Session</button>
            </Link>
        </>
    );
};

export default Session;