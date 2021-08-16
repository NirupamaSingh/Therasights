import React from 'react';
import { useHistory } from "react-router-dom";
import './App.css';

const BackButton = () => {
    let history = useHistory();
    return (
        <>
            <button onClick={() => history.goBack()} className="backButton">Back</button>
        </>
    );
}

export default BackButton;