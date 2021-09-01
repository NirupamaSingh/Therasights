import React from "react";
import Navbar from '../NavComponent/nav'
import './aboutUs.css';
import One from "./one.svg";
import Two from "./two.svg";
import Three from "./three.svg";
import Niharika from "./niharika.jpeg";
import Nirupama from "./nirupama.jpg";
import Simran from "./simran.jpeg";

const AboutUS = () => {
    return (
        <>
        <div className="font">  <p className="heading">What do we do?</p>
            <p className="aboutDetails">Therasights provides a platform that facilitates organization and analysis
                of therapy <br /> sessions for mental health professionals. It consists of an inbuilt video
                calling feature with live captioning and  <br /> transcripts  will leave very little to lose in translation.
                Symbl.ai features and offerings are further used to make  <br /> the application more versatile with it’s
                sentiment analysis feature. The conversation is analyzed to provide a  <br /> report to the therapist which
                can aid the best analysis and diagnosis of the therapy session.</p>
            <p className="headingTeam">Our Team.</p>
            <img src={One} alt="one" className="one" />
            <img src={Niharika} alt="niharika" className="niharika" />
            <img src={Two} alt="two" className="two" />
            <img src={Simran} alt="simran" className="simran" />
            <img src={Three} alt="three" className="three" />
            <img src={Nirupama} alt="nirupama" className="nirupama" />


            <div className="aboutNiharika">
                <p>Niharika Singh</p>
            </div>
            <div className="aboutSimran">
                <p>Simran Makhija</p>
            </div>
            <div className="aboutNirupama">
                <p>Nirupama Singh</p>
            </div>
        </div>
        <Navbar/>
        </>
    );
}

export default AboutUS;
