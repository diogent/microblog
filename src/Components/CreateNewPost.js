import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { postCreation } from "../redux/actions/CreatePost";

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
   var file = event.target.files[0]
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
    this.props.postCreation(completePost);
  }

  render(){
    return (
      <div>
        <NavLink to = "/Feed">
          <button className="round-btn">Feed</button>
        </NavLink>
        <form onSubmit = {this.createPost}>
          <div>
            <label> Text </label>
            <input type="text" onChange={(event) => this.handleInputChange(event, 'post')}/>
          </div>
          <div>
            <input type="file" name="imgUpload" accept='.png' onChange={this.getImageBase64} />
          </div>
          <div>
            <button type="button">Create new post</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user.userName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postCreation: (post) => dispatch(postCreation(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost);
