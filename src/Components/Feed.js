import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from "../redux/actions/CreatePost";

class Feed extends Component {

  componentDidMount() {
    this.props.getAllPosts();
  }

  displayPosts() {
    return this.props.posts.items.map(post => {
      return (
        <div>
          <div>
            @{post.userName}
          </div>
          <div>
            <p>{post.post}</p>
          </div>
            <img src={post.image}/>
            <div>{post.date}</div>
        </div>

      );
    });
  }

  render(){

    const { isLoading } = this.props.posts;

    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <NavLink to="/CreateNewPost">
          <button className="round-btn">CreateNewPost</button>
        </NavLink>
        <div>{this.displayPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: {
      isLoading: state.post.isLoading,
      items: state.post.posts
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: () => dispatch(getAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
