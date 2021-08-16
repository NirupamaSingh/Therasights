import React from "react";
import './login.css';
import Word from "./word.svg";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <body >
            <img src={Word} alt="logo" className="logoLog" />
            <div className="bgImgLog">
                <form className="formLog">
                    <div >
                        <label >Email Id</label> &nbsp;
                        <input type="text" className="input" size="40"></input>
                    </div> <br />
                    <div >
                        <label >Password</label> &nbsp;
                        <input type="text" className="input" size="35" height="50px"></input>
                    </div><br />
                    <Link to='/profile'>
                        <button className="btn">Login</button>
                    </Link> <br /> <br /><br />
                    <p className="signOp"> &nbsp;  &nbsp;  &nbsp; New Here? <Link to='/signup'>Signup now</Link></p>

                </form>
            </div>
        </body>
    );
};

export default Login;