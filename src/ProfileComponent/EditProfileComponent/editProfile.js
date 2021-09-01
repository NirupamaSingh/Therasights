import React from "react";
import Navbar from '../../NavComponent/nav'

import './editProfile.css';

import EditProLogo from './editProLogo.svg';
import HotAir from './hotair.svg';
import Sun from './sun.svg';
import EditBox from './boxEdit.svg'
import { Link } from 'react-router-dom';
const EditProfile = () => {
    return (
        <>
        <div>
            <img src={EditProLogo} alt="logo" className="logoEditPro" />
            <img src={Sun} alt="logo" className="sun" />
            <img src={HotAir} alt="logo" className="hotair" />
            <img src={EditBox} alt="logo" className="boxEdit" />
            <div >
                <form className="formP">
                    <div className="setName">
                        <label>Name </label> &nbsp; &nbsp; &nbsp;
                        <input type="text"  size="40" ></input>
                    </div> <br />
                    <div className="setDOB">
                        <label>DOB </label> &nbsp; &nbsp; &nbsp;
                        <input type="date" size="10"></input>
                        

                    </div><br />
                    <div className="setMob">
                        <label>Mobile </label> &nbsp; &nbsp; &nbsp;
                        <input type="tel"  size="15"></input>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <label>Gender </label> &nbsp; &nbsp; &nbsp;
                        <input type="text"  size="6" ></input>
                    </div> <br />
                    <div className="setEmail">
                        <label>Email </label> &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="email"  size="40"></input>
                    </div> <br />
                    <div className="setAbout">
                        <label>About Me </label> &nbsp; &nbsp; &nbsp; 
                        <input type="test"  size="38"></input>
                    </div> <br />
                    <div className="setBut">
                        <Link to='/profile'>
                            <button className="btnSave">Save</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        <Navbar/>
        </>
    );
};

export default EditProfile;