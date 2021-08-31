import React from "react";
import './session.css';
import { Link } from 'react-router-dom';

const Session = () => {

    return (
        <>
            <Link to="/mseForm">
                <button className="endButton">End Session</button>
            </Link>
        </>
    );
};

export default Session;