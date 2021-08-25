import React from "react";
import './sessionLink.css';
import CopyButton from './copyButton.svg';
import LinkBg from './linkBg.svg';
import MeetingButton from './meetingButton.svg';
import LinkBox from './linkBox.svg';


const SessionLink = () => {

    return (
        <>
            <img src={LinkBg} alt="bg" className="linkBg" />
            <img src={LinkBox} alt="box" className="linkBox" />
            <img src={CopyButton} alt="box" className="copyButton" />
            <img src={MeetingButton} alt="box" className="meetingButton" />
            <div className="setLink">
                <label>Link </label> &nbsp; &nbsp;
                <input type="text" size="28" ></input>
            </div> 

        </>
    );
};

export default SessionLink;