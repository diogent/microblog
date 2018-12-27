import React, { Component } from 'react';
import "../Styles/CreateNewPost/create-form.scss";
import "../Styles/Post/main-container.scss";
import "../Styles/Post/post.scss";
import "../Styles/Button/button-primary.scss";

class Container extends Component {
  render(){
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
export default Container;
