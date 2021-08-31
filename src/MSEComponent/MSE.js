import React from "react";
import './MSE.css';
import MseBg from "./MseBg.svg";
import MseTopic from "./MseTopic.svg";
import { Link } from 'react-router-dom';

const MSE = () => {
    return (
        <>
            <img src={MseBg} alt="BG" className="MseBg" />
            <img src={MseTopic} alt="topic" className="MseTopic" />
            <form className="MseForm">
                <div >
                    <label>Date :</label>
                    &nbsp; &nbsp;
                    <input type="date" id="date" name="date" />
                </div>
                <br />
                <div >
                    <label>Patient Name :</label>
                    &nbsp; &nbsp;
                    <input type="text" id="pName" name="pName" size="50" />
                </div>
                <br />
                <div >
                    <label>Patient Id :</label>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <input type="text" id="pId" name="pId" size="50" />
                </div>
                <br />
                <div><label>Appearance :</label>
                    &nbsp; &nbsp;
                    <input type="radio" name="appearance" />
                    &nbsp;
                    <label>Casual dress, normal grooming & hygiene</label><br />
                    <div className="radio">
                        <input type="radio" name="appearance" />
                        &nbsp;
                        <label>Other(describe)&nbsp;</label>
                        <input type="text" id="other" name="appearance" />
                    </div>
                </div>
                <br /><br />
                <div><label>Attitude :</label>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="html" name="attitude" />
                    &nbsp;
                    <label>Calm & cooperative</label><br />
                    <div className="radio">
                        <input type="radio" id="css" name="attitude" />
                        &nbsp;
                        <label>Other(describe)&nbsp;</label>
                        <input type="text" id="other" name="attitude" />
                    </div>
                </div>
                <br /><br />
                <div><label>Behaviour :</label>
                    &nbsp; &nbsp;  &nbsp; &nbsp;
                    <input type="radio" id="html" name="behaviour" />
                    &nbsp;
                    <label>No unusual movements or psychomotor changes</label><br />
                    <div className="radio">
                        <input type="radio" id="css" name="behaviour" />
                        &nbsp;
                        <label>Other(describe)&nbsp;</label>
                        <input type="text" id="other" name="behaviour" />
                    </div>
                </div>
                <br /><br />
                <div><label>Speech :</label>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="html" name="speech" />
                    &nbsp;
                    <label>Normal rate/tone/volume/ w/out pressure</label><br />
                    <div className="radio">
                        <input type="radio" id="css" name="speech" />
                        &nbsp;
                        <label>Other(describe)&nbsp;</label>
                        <input type="text" id="other" name="speech" />
                    </div>
                </div>
                <br /><br />
                <div><label>Affect :</label>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="html" name="affect" />
                    &nbsp;
                    <label>Reactive & mood</label><br />
                    <div className="radio">
                        <input type="radio" id="html" name="affect" />
                        &nbsp;
                        <label>Normal range congruent</label><br />
                        <input type="radio" id="html" name="affect" />
                        &nbsp;
                        <label>Labile</label><br />
                        <input type="radio" id="html" name="affect" />
                        &nbsp;
                        <label>Depressed</label><br />
                        <input type="radio" id="html" name="affect" />
                        &nbsp;
                        <label>Tearful   </label><br />
                        <input type="radio" id="html" name="affect" />
                        &nbsp;
                        <label>Constricted</label><br />
                        <input type="radio" id="html" name="affect" />
                        &nbsp;
                        <label>Blunted</label><br />
                        <input type="radio" id="html" name="affect" />
                        &nbsp;
                        <label>Flat</label><br />
                        <input type="radio" id="css" name="affect" />
                        &nbsp;
                        <label>Other(describe)&nbsp;</label>
                        <input type="text" id="other" name="affect" />
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div><label>Mood :</label>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="html" name="mood" />
                    &nbsp;
                    <label>Euthymic</label><br />
                    <div className="radio">
                        <input type="radio" id="html" name="mood" />
                        &nbsp;
                        <label>Anxious</label><br />
                        <input type="radio" id="html" name="mood" />
                        &nbsp;
                        <label>Irritable</label><br />
                        <input type="radio" id="html" name="mood" />
                        &nbsp;
                        <label>Depressed</label><br />
                        <input type="radio" id="html" name="mood" />
                        &nbsp;
                        <label>Elevated</label><br />
                        <input type="radio" id="css" name="mood" />
                        &nbsp;
                        <label>Other(describe)&nbsp;</label>
                        <input type="text" id="other" name="mood" />
                    </div>
                </div>
                <br /><br /><br /><br /><br /> <br />
                <div><label>Thought Process : </label>
                    &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="html" name="thought" />
                    &nbsp;
                    <label>Goal-directed & Logical</label><br />
                    <div className="radio">
                        &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="html" name="thought" />
                        &nbsp;
                        <label>Disorganized</label><br />
                        &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
                        <input type="radio" id="css" name="thought" />
                        &nbsp;
                        <label>Other(describe)&nbsp;</label>
                        <input type="text" id="other" name="thought" />
                    </div>
                </div>
                <br /><br /><br />
                <div><label>Perception  : </label>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="html" name="perception" />
                    &nbsp;
                    <label>No hallucinations or delusions during interview</label><br />
                    <div className="radio">
                        &nbsp; &nbsp;
                        <input type="radio" id="css" name="perception" />
                        &nbsp;
                        <label>Other(describe)&nbsp;</label>
                        <input type="text" id="other" name="perception" />
                    </div>
                </div>
                <br /><br />
                <div><label>Orientation : </label>
                    &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="html" name="orientation" />
                    &nbsp;
                    <label>Oriented X 3</label><br />
                    <div className="radio">
                        &nbsp;
                        <input type="radio" id="css" name="orientation" />
                        &nbsp;
                        <label>Other(describe)&nbsp;</label>
                        <input type="text" id="other" name="orientation" />
                    </div>
                </div>
                <br /><br />
                <div><label>Memory/Concentration :</label>
                    &nbsp; &nbsp;
                    <input type="radio" id="html" name="memory" />
                    &nbsp;
                    <label>Short Term Intact</label><br />
                    <div className="radio">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="html" name="memory" />
                        &nbsp;
                        <label>Long Term Intact</label><br />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="html" name="memory" />
                        &nbsp;
                        <label>Distractible/Inattentive</label><br />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="css" name="memory" />
                        &nbsp;
                        <label>Other(describe)&nbsp;</label>
                        <input type="text" id="other" name="memory" />
                    </div>
                </div>
                <br /><br /><br /><br />
                <div><label>Insight/Judgment : </label>
                    &nbsp; &nbsp;
                    <input type="radio" id="html" name="insight" />
                    &nbsp;
                    <label>Good</label><br />
                    <div className="radio">
                        &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="html" name="insight" />
                        &nbsp;
                        <label>Fair</label><br />
                        &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="html" name="insight" />
                        &nbsp;
                        <label>Poor</label><br />
                    </div>
                </div><br /><br /><br />
                <div><label>Thought Content : </label>
                    &nbsp; &nbsp; &nbsp;
                    <input type="radio" id="html" name="suicidal" />
                    &nbsp;
                    <label>Suicidal ideation</label><br />
                    <div className="radio">
                        &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="html" name="suicidal" />
                        &nbsp;
                        <label>None</label><br />
                        &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="html" name="suicidal" />
                        &nbsp;
                        <label>Passive</label><br />
                        &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="html" name="suicidal" />
                        &nbsp;
                        <label>Active</label><br /> <br />
                        <label>If Active : &nbsp; &nbsp;  Y &nbsp; &nbsp; N</label> <br />
                        <div>
                            &nbsp; &nbsp; &nbsp;
                            <label>Plan</label> &nbsp; &nbsp; &nbsp; &nbsp;
                            <input type="radio" id="html" name="suiP" /> &nbsp; &nbsp; &nbsp;
                            <input type="radio" id="html" name="suiP" /><br />
                            &nbsp; &nbsp; &nbsp;
                            <label>Intent</label> &nbsp; &ensp;
                            <input type="radio" id="html" name="suiI" /> &nbsp; &nbsp; &nbsp;
                            <input type="radio" id="html" name="suiI" /><br />
                            &nbsp; &nbsp;  &nbsp;
                            <label>Means</label> &nbsp; &nbsp;
                            <input type="radio" id="html" name="suiM" /> &nbsp; &nbsp; &nbsp;
                            <input type="radio" id="html" name="suiM" /><br />
                            <br /> <br />
                        </div>
                    </div>
                    <div class="vl"></div>
                    <div className="afterBar">
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="html" name="homicidal" />
                        &nbsp;
                        <label>Homicidal ideation</label><br />
                        <div >
                            &nbsp; &nbsp;  &nbsp; &nbsp;
                            <input type="radio" id="html" name="homicidal" />
                            &nbsp;
                            <label>None</label><br />
                            &nbsp; &nbsp;  &nbsp; &nbsp;
                            <input type="radio" id="html" name="homicidal" />
                            &nbsp;
                            <label>Passive</label><br />
                            &nbsp; &nbsp;  &nbsp; &nbsp;
                            <input type="radio" id="html" name="homicidal" />
                            &nbsp;
                            <label>Active</label><br /> <br />
                            <label>If Active : &nbsp; &nbsp;  Y &nbsp; &nbsp; N</label> <br />
                            <div>
                                &nbsp; &nbsp; &nbsp;
                                <label>Plan</label> &nbsp; &nbsp; &nbsp; &nbsp;
                                <input type="radio" id="html" name="homP" /> &nbsp; &nbsp; &nbsp;
                                <input type="radio" id="html" name="homP" /><br />
                                &nbsp; &nbsp; &nbsp;
                                <label>Intent</label> &nbsp; &ensp;
                                <input type="radio" id="html" name="homI" /> &nbsp; &nbsp; &nbsp;
                                <input type="radio" id="html" name="homI" /><br />
                                &nbsp; &nbsp;  &nbsp;
                                <label>Means</label> &nbsp; &nbsp;
                                <input type="radio" id="html" name="homM" /> &nbsp; &nbsp; &nbsp;
                                <input type="radio" id="html" name="homM" /><br />
                                <br /> <br />
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div>
                    <Link to="/home">
                        <input type="submit" className="SubmitBtn" />
                    </Link>
                </div>
            </form>
        </>
    );
};

export default MSE;