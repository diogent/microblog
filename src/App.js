import React, { Component } from 'react';
import GetStarted from "./Components/GetStarted";
import RegisterForm from "./Components/RegisterForm";
import Login from "./Components/Login";
import Error from "./Components/Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import './Styles/AuthorizationStyles.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={GetStarted} />
          <Route path="/Register" component={RegisterForm} />
          <Route path="/Login" component={Login} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
