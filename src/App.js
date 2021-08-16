import React from 'react';
import './App.css';
import Navbar from './NavComponent/nav';
import Home from './HomeComponent/home';
import Login from './LoginComponent/login';
import Signup from './SignupComponent/signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
