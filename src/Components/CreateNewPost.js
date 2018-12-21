import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { createPost, getPostsByUser } from "../redux/actions/CreatePost";

class CreateNewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: this.props.user,
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
    this.props.getFilteredByUser(this.props.user);
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
    const { items, isLoading } = this.props.posts;

    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <NavLink to = "/Feed">
          <button className="round-btn">Feed</button>
        </NavLink>
        <form >
          <div>
            <label> Text </label>
            <input type="text" onChange={(event) => this.handleInputChange(event, 'post')}/>
          </div>
          <div>
            <input type="file" name="imgUpload" accept='.png' onChange={this.getImageBase64} />
          </div>
          <div>
            <button type="button" onClick = {this.createPost}>Create new post</button>
          </div>
        </form>

        <div>{this.displayPosts()}</div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user.userName,
    posts: {
      isLoading: state.post.isLoading,
      items: state.post.posts
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    getFilteredByUser: (userName) => dispatch(getPostsByUser(userName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost);
