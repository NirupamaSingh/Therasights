import React from 'react';
import './App.css';
import Navbar from './NavComponent/nav';
import Home from './HomeComponent/home';
import Login from './LoginComponent/login';
import Signup from './SignupComponent/signup';
import Dashboard from './DashboardComponent/dashboard';
import Profile from './ProfileComponent/profile';
import Patient from './PatientComponent/patient';
import Journal from './JournalComponent/journal';
import AddPatient from './PatientComponent/AddPatientComponent/addPatient';
import EditProfile from './ProfileComponent/EditProfileComponent/editProfile';
import CreateSession from './SessionComponent/CreateSessionComponent/createSession';
import AboutUs from './AboutUsComponent/aboutUs';
import Helpline from './HelplineComponent/helpline';
import sessionLink from './SessionComponent/LinkComponent/sessionLink';
import Session from './SessionComponent/session';
import MSE from './MSEComponent/MSE';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/patient" component={Patient}></Route>
          <Route path="/journal" component={Journal}></Route>
          <Route path="/addPatient" component={AddPatient}></Route>
          <Route path="/editProfile" component={EditProfile}></Route>
          <Route path="/createSession" component={CreateSession}></Route>
          <Route path="/aboutUs" component={AboutUs}></Route>
          <Route path="/helpline" component={Helpline}></Route>
          <Route path="/link" component={sessionLink}></Route>
          <Route path="/session" component={Session}></Route>
          <Route path="/mseForm" component={MSE}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
