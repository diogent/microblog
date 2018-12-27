import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from "../redux/actions/CreatePost";
import Container from "./Container";

class Feed extends Component {

  componentDidMount() {
    this.props.getAllPosts();
  }

  displayPosts() {
    return this.props.posts.map(post => {
      return (
        <div className="post" key={post.id}>
          <div className="post__name">
            @{post.userName}
          </div>
          <div className="post__content">
            <p>{post.post}</p>
          </div>
            <img src={post.image} className="post__image"/>
            <div className="post__date">{post.date}</div>
        </div>

      );
    });
  }

  render(){

    if (this.props.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <Container>
        <NavLink to="/CreateNewPost">
          <button className="button">Create new post</button>
        </NavLink>
        <div className="posts_container">{this.displayPosts()}</div>
      </Container>
    );
  }
}

const mapStateToProps = ({ post: {isLoading, posts} }) => {
  return {
    posts,
    isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: () => dispatch(getAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
