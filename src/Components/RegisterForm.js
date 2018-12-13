import React, { Component } from 'react';
import { userCreate } from "../APIs/apiService.js";
import { userCreation } from "../redux/actions/Authorization";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';


class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: {
        value: '',
        error: ''
      },
      email: {
        value: '',
        error: ''
      },
      password: {
        value: '',
        error: ''
      },
      cPassword: {
        value: '',
        error: ''
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createUser = this.createUser.bind(this);
    this.registerIsValid = this.registerIsValid.bind(this);
  }

  registerIsValid() {
    let formIsValid = true;
    if(!this.state.userName.value){
      formIsValid = false;
      this.setState({userName: {error: "Enter user name"}});
    }
    if(!this.state.email.value){
      formIsValid = false;
      this.setState({email: {error: "Enter email"}});
    }
    if(!this.state.password.value){
      formIsValid = false;
      this.setState({password: {error: "Enter password"}});
    }
    if(!this.state.cPassword.value){
      formIsValid = false;
      this.setState({cPassword: {error: "Enter password confirmation"}});
    }
    if(this.state.password.value !== this.state.cPassword.value){
      formIsValid = false;
      alert('Passwords do not match!')
    }
    return formIsValid;
  }

  handleInputChange(event, name) {
    const value = event.target.value;
    this.setState({
      [name]: {value: value}
    });
  }

  createUser = (event) => {
    event.preventDefault();
    var isValid = this.registerIsValid();
    if(isValid) {
        let user = {
          userName: this.state.userName.value,
          email: this.state.email.value,
          password: this.state.password.value,
      }
      this.props.userCreation(user);
    }
}

  render() {
    return (
      <div className="user">
        <NavLink to="/Login">
          <button className="round-btn">Login</button>
        </NavLink>
        <header className="user__header">
            <h1 className="user__title">Sign-up</h1>
        </header>
        <form className="form" onSubmit={this.createUser}>
            <div className="form__group">
                <input type="text"  placeholder="Username" className="form__input" onChange={(event) => this.handleInputChange(event, 'userName')}/>
            </div>

            <div className="form__group">
                <input type="email"  placeholder="Email" className="form__input" onChange={(event) => this.handleInputChange(event, 'email')}/>
            </div>

            <div className="form__group">
                <input type="password"  name="password" placeholder="Password" className="form__input" onChange={(event) => this.handleInputChange(event, 'password')}/>
            </div>

            <div className="form__group">
                <input type="password"  name="cPassword" placeholder="Confirm password" className="form__input" onChange={(event) => this.handleInputChange(event, 'cPassword')}/>
            </div>
            <button className="btn"  type="submit">Register</button>
            {this.props.registerSuccess && <Redirect to='/Login'/>}
        </form>
        <div>
          <p>{this.state.userName.error}</p>
          <p>{this.state.email.error}</p>
          <p>{this.state.password.error}</p>
          <p>{this.state.cPassword.error}</p>
        </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    registerSuccess: state.auth.registerSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userCreation: (user) => dispatch(userCreation(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
