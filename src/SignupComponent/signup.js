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
                        <input type="text" className="input" size="40"></input>
                    </div> <br />
                    <div >
                        <label >Password</label> &nbsp;
                        <input type="text" className="input" size="35" height="50px"></input>
                    </div><br />
                    <div >
                        <label >Repeat   &nbsp;
                            <input type="text" className="input" size="35" height="50px"></input> 
                            <br /> Password</label> &nbsp;

                    </div> <br/>
                    <button className="btn">Sign Up</button> <br /> <br/>
                    <p className="logOp"> &nbsp;  &nbsp;  &nbsp; Already Signed up? <Link to='/login'>Login</Link></p>
                    
                </form>
            </div>
            
        </body>
    );
};

export default Login;