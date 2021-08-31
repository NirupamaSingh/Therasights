import React from "react";
import './createSession.css';
import CreateLogo from './createLogo.svg';
import ButCreate from './butCreate.svg';
import DataBox from './DataBox.svg';
import { Link } from 'react-router-dom';
const CreateSession = () => {

    return (
        <body>
            <img src={CreateLogo} alt="logo" className="logoCreate" />
            <div className="bgImgCreate">
                <img src={DataBox} alt="logo" className="dataBox" />
                <form className="formP">
                    <div className="setNameC">
                        <label>Name </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="text" size="38" ></input>
                    </div> <br />
                    <div className="setIDC">
                        <label>ID </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="text" size="37"></input>
                    </div><br />
                    <div className="setEmailC">
                        <label>Email </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="email" size="37"></input>
                    </div> <br />
                    <Link to="/link">
                        <img src={ButCreate} alt="logo" className="butCreate" />
                    </Link>

                </form>
            </div>
        </body>
    );
};

export default CreateSession;