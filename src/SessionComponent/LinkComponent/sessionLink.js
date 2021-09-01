import React from "react";
import Navbar from "../../NavComponent/nav";
import './sessionLink.css';
import CopyButton from './copyButton.svg';
import LinkBg from './linkBg.svg';
import MeetingButton from './meetingButton.svg';
import LinkBox from './linkBox.svg';
import { Link } from 'react-router-dom';


const SessionLink = () => {

    return (
        <>
            <img src={LinkBg} alt="bg" className="linkBg" />
            <img src={LinkBox} alt="box" className="linkBox" />
            <img src={CopyButton} alt="box" className="copyButton" />
            <Link to='/session'>
                <img src={MeetingButton} alt="box" className="meetingButton" />
            </Link>

            <div className="setLink">
                <label>Link </label> &nbsp; &nbsp;
                <input type="text" size="28" ></input>
            </div>
            <Navbar/>
        </>
    );
};

export default SessionLink;