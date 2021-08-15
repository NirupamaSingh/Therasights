import React from "react";
import './login.css';
import Logo from "./logo.svg";


const Login = () => {
    return (
        <body>
            <img src={Logo} alt="logo" className="logo" />
            <div className="bgImg">
                <form className="form">
                    <div >
                        <label for="login">Email Id</label> &nbsp;
                        <input type="text" className="input" size="40"></input>
                    </div> <br />
                    <div >
                        <label for="login">Password</label> &nbsp;
                        <input type="text" className="input" size="35" height="50px"></input>
                    </div><br /><br />
                    <button className="btn">Submit</button>
                </form>
            </div>
        </body>
    );
};

export default Login;