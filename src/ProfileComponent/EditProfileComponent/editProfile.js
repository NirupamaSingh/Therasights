import React from "react";
import './editProfile.css';

import EditProLogo from './editProLogo.svg';
import HotAir from './hotair.svg';
import Sun from './sun.svg';
import EditBox from './boxEdit.svg'
import { Link } from 'react-router-dom';
const EditProfile = () => {
    return (
        <div>
            <img src={EditProLogo} alt="logo" className="logoEditPro" />
            <img src={Sun} alt="logo" className="sun" />
            <img src={HotAir} alt="logo" className="hotair" />
            <img src={EditBox} alt="logo" className="boxEdit" />
            <div >
                <form className="formP">
                    <div className="setName">
                        <label>Name </label> &nbsp; &nbsp; &nbsp;
                        <input type="text" className="inputTransparent" size="60" ></input>
                    </div> <br />
                    <div className="setDOB">
                        <label>DOB </label> &nbsp; &nbsp; &nbsp;
                        <input type="date" className="inputTransparent" size="20"></input>
                        

                    </div><br />
                    <div className="setMob">
                        <label>Mobile </label> &nbsp; &nbsp; &nbsp;
                        <input type="tel" className="inputTransparent" size="20"></input>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <label>Gender </label> &nbsp; &nbsp; &nbsp;
                        <input type="text" className="inputTransparent" size="10" ></input>
                    </div> <br />
                    <div className="setEmail">
                        <label>Email </label> &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="email" className="inputTransparent" size="60"></input>
                    </div> <br />
                    <div className="setAdd">
                        <label>About Me </label> &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="test" className="inputTransparent" size="60"></input>
                    </div> <br />
                    <div className="setBut">
                        <Link to='/profile'>
                            <button className="btnSave">Save</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;