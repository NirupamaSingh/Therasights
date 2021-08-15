import React from "react";
import './home.css';
import Login from './Login.svg';
import Signup from './Sign.svg';
import Therasights from './therasight.svg';
import Umbrella from './umbrella.svg';

const Home = () => {
    return (
        <div className="div">
            <img className="img" alt="therasights" src={Therasights}></img>
            <p className="p">A Therapists Friend</p>
            <img className="umbrella" alt="umbrella" src={Umbrella}></img>
            <img className="login" alt="login" src={Login}></img>
            <img className="signup" alt="signup" src={Signup}></img>


        </div>


    );
};

export default Home;