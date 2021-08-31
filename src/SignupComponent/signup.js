import React from "react";
import './signup.css';
import Word from "./word.svg";
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <body>
            <img src={Word} alt="logo" className="logoSign" />
            <div className="bgImgSign">
                <form className="formSign">
                    <div >
                        <label >Email Id</label> &nbsp;
                        <input type="text" className="input" size="30"></input>
                    </div> <br />
                    <div >
                        <label >Password</label> &nbsp;
                        <input type="text" className="input" size="28" height="50px"></input>
                    </div><br />
                    <div >
                        <label >Repeat   &nbsp;
                            <input type="text" className="input" size="30" height="50px"></input>
                            <br /> Password</label> &nbsp;

                    </div> <br />
                    <Link to='/profile'>
                        <button className="btn">Sign Up</button>
                    </Link>
                    <br /> <br />
                    <p className="logOp"> &nbsp;  &nbsp;  &nbsp; Already Signed up? <Link to='/login'>Login</Link></p>

                </form>
            </div>

        </body>
    );
};

export default Login;