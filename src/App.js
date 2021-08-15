import React from 'react';
import './App.css';
import Navbar from './NavComponent/nav';
import Home from './HomeComponent/home';
import Login from './LoginComponent/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
