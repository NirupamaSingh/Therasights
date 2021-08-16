import React from "react";
import './profile.css';
import ProfileLogo from './profileLogo.svg';
import Dashboard from '../DashboardComponent/dashboard';
import UserImg from './userImg.png';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <Dashboard />
            <img src={ProfileLogo} alt="profile" className="profileLogo" />
            <div className="bgImgPro">
                <img src={UserImg} alt="userImg" className="userImg" />
                <form className="formP">
                    <div >
                        <label><u>Name</u> :</label> &nbsp;
                        Nirupama Singh
                    </div> <br />
                    <div >
                        <label ><u>Gender</u> :</label> &nbsp;
                        Female &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <label> <u>DOB</u> :</label> &nbsp;
                        01-02-2000
                    </div><br />
                    <div >
                        <label ><u>Email</u> :</label> &nbsp;
                        nirupama15singh@gmail.com &nbsp; &nbsp; &nbsp;

                    </div> <br />
                    <div >
                        <label ><u>Mobile</u> :</label> 8377037966 &nbsp; &nbsp; &nbsp; &nbsp;
                        <label ><u>About Me</u> :</label> &nbsp;
                        hi, i am a therapist &nbsp; &nbsp; &nbsp;

                    </div> <br /><br /><br />
                    <Link to='/editProfile'>
                        <button className="btnP">Edit</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Profile;