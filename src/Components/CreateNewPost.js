import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class CreateNewPost extends Component {
  render(){
    return (
      <div>
        <NavLink to = "/Feed">
          <button className="round-btn">Feed</button>
        </NavLink>
      </div>
    );
  }
}

export default CreateNewPost;
