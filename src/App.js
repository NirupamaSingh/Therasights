import React from 'react';
import './App.css';
import BackButton from './back'
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

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" component={Home}></Route>
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
        </Switch>
        <Navbar />
        <BackButton />
      </div>
    </Router>
  );
}

export default App;
