import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Feed extends Component {
  render(){
    return (
      <div>
        <NavLink to="/CreateNewPost">
          <button className="round-btn">CreateNewPost</button>
        </NavLink>
      </div>
    );
  }
}

export default Feed;
