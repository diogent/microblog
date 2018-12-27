import React from 'react';
import {NavLink} from 'react-router-dom';
import "../Styles/StartPage/start-page-container.scss";

const GetStarted = () => (
      <div className="container__startpage">
        <NavLink to = "/Login">
          <button className="button">Login</button>
        </NavLink>
        <NavLink to = "/Register">
          <button className="button">Register</button>
        </NavLink>
      </div>
);

export default GetStarted;
