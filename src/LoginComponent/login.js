import React from "react";
import './login.css';
import Word from "./word.svg";


const Login = () => {
    return (
        <body >
            <img src={Word} alt="logo" className="logo" />
            <div className="bgImg">
                <form className="form">
                    <div >
                        <label >Email Id</label> &nbsp;
                        <input type="text" className="input" size="40"></input>
                    </div> <br />
                    <div >
                        <label >Password</label> &nbsp;
                        <input type="text" className="input" size="35" height="50px"></input>
                    </div><br /><br />
                    <button className="btn">Login</button>
                </form>
            </div>
        </body>
    );
};

export default Login;