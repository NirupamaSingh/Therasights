import React from "react";
import './home.css';
import Login from './Login.svg';
import Signup from './Sign.svg';
import Therasights from './therasight.svg';
import Umbrella from './umbrella.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="div">
            <img className="img" alt="therasights" src={Therasights}></img>
            <img className="umbrella" alt="umbrella" src={Umbrella}></img>
            <Link to='/login'>
                <img className="login" alt="login" src={Login}></img>
            </Link>
            <Link to='/signup'>
                <img className="signup" alt="signup" src={Signup}></img>
            </Link>
        </div>
    );
};

export default Home;