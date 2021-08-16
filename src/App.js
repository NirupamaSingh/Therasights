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
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
