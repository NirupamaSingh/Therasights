import React from "react";
import './addPatient.css';
import AddPatLogo from './addPatLogo.svg';
import HotAir from './hotair.svg';
import Sun from './sun.svg';
import AddBox from './boxAdd.svg'
import { Link } from 'react-router-dom';
const AddPatient = () => {
    return (
        <div>
            <img src={AddPatLogo} alt="logo" className="logoAddPat" />
            <img src={Sun} alt="logo" className="sun" />
            <img src={HotAir} alt="logo" className="hotair" />
            <img src={AddBox} alt="logo" className="boxAdd" />
            <div >
                <form className="formP">
                    <div className="setName">
                        <label>Name </label> &nbsp; &nbsp; &nbsp;
                        <input type="text" size="40" ></input>
                    </div> <br />
                    <div className="setDOB">
                        <label>DOB </label> &nbsp; &nbsp; &nbsp;
                        <input type="date" size="20"></input>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <label>Age </label> &nbsp; &nbsp; &nbsp;  &nbsp;  
                        <input type="text"  size="8" ></input>

                    </div><br />
                    <div className="setMob">
                        <label>Mobile </label> &nbsp; &nbsp; &nbsp;
                        <input type="tel"  size="15"></input>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <label>Gender </label> &nbsp; &nbsp; &nbsp; 
                        <input type="text" size="7" ></input>
                    </div> <br />
                    <div className="setEmail">
                        <label>Email </label> &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="email"  size="40"></input>
                    </div> <br />
                    <div className="setAdd">
                        <label>Address </label> &nbsp; &nbsp; &nbsp;
                        <input type="test"  size="38"></input>
                    </div> <br />
                    <div className="setBut">
                        <Link to='/patient'>
                            <button className="btnSave">Save</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPatient;