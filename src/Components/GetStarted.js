import React from 'react';
import {NavLink} from 'react-router-dom';

const GetStarted = () => (
      <div className="main">
        <div className="header">
          <div className="menu">
            <ul>
              <li>
                <NavLink to = "/Login">
                  <button className="round-btn">Login</button>
                </NavLink>
              </li>
              <li>
                <NavLink to = "/Register">
                  <button className="round-btn">Register</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
);

export default GetStarted;
