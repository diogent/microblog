import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { createPost, getPostsByUser } from "../redux/actions/CreatePost";
import "../Styles/CreateNewPostStyles/create-form-styles.scss";
import "../Styles/PostStyles/main-container.scss";
import "../Styles/PostStyles/post-styles.scss";
import "../Styles/ButtonStyles/button-primary.scss";

class CreateNewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: props.user.userName,
      post: '',
      image: '',
      error: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createPost = this.createPost.bind(this);
    this.getImageBase64 = this.getImageBase64.bind(this);
  }

  getImageBase64(event) {
   let file = event.target.files[0]
   let reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onload = () => {
     this.setState({
       image: reader.result
     });
   };
   reader.onerror = function (error) {
     this.setState({
       error: error
     });
   }
 }

  handleInputChange(event, name) {
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  createPost = event => {
    event.preventDefault();
    let dateOfPost = new Date().toLocaleString();
    const completePost = {
      userName: this.state.userName,
      post: this.state.post,
      image: this.state.image,
      date: dateOfPost
    };
    this.props.createPost(completePost);
  }

  componentDidMount() {
    this.props.getFilteredByUser(this.props.user.userName);
  }

  displayPosts() {
    return this.props.posts.map(post => {
      return (
        <div className="post" key={post.id}>
          <div className="post__name" >
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
      <div className="container">
        <NavLink to = "/Feed">
          <button className="button">Feed</button>
        </NavLink>
        <div className="post">
          <form>
            <div>
              <label className="post__name"> Text </label>
            </div>
            <div>
              <textarea className="form__textarea" type="text" onChange={(event) => this.handleInputChange(event, 'post')}/>
            </div>
            <div>
              <input type="file" className="form__buttons" name="imgUpload" accept='.png' onChange={this.getImageBase64} />
            </div>
            <div>
              <button type="button" className="button form__buttons" onClick = {this.createPost}>Create new post</button>
            </div>
          </form>
        </div>

        <div>{this.displayPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: {user}, post: {isLoading, posts} }) => {
  return {
    user,
    isLoading,
    posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    getFilteredByUser: (userName) => dispatch(getPostsByUser(userName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost);
