import React from "react";
import './createSession.css';
import CreateLogo from './createLogo.svg';
import ButCreate from './butCreate.svg';
import DataBox from './DataBox.svg';

const CreateSession = () => {

    return (
        <body>
            <img src={CreateLogo} alt="logo" className="logoCreate" />
            <div className="bgImgCreate">
                <img src={DataBox} alt="logo" className="dataBox" />
                <form className="formP">
                    <div className="setNameC">
                        <label>Name </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="text" className="inputTransparent" size="60" ></input>
                    </div> <br />
                    <div className="setIDC">
                        <label>ID </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="number" className="inputTransparent" size="60"></input>
                    </div><br />
                    <div className="setEmailC">
                        <label>Email </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="email" className="inputTransparent" size="60"></input>
                    </div> <br />
                    <img src={ButCreate} alt="logo" className="butCreate" />
                </form>
            </div>
        </body>
    );
};

export default CreateSession;