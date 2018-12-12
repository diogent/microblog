import React, { Component } from 'react';
import GetStarted from "./Components/GetStarted";
import RegisterForm from "./Components/RegisterForm";
import Login from "./Components/Login";
import Error from "./Components/Error";
import CreateNewPost from "./Components/CreateNewPost";
import Feed from "./Components/Feed";
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
          <Route path="/Feed" component={Feed} />
          <Route path="/CreateNewPost" component={CreateNewPost} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
