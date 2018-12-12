import React, { Component } from 'react';
import {userCreate} from "../APIs/apiService.js";
import { userCreation } from "../redux/actions/Authorization";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {NavLink} from 'react-router-dom';


class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      cPassword: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleInputChange(event, name) {
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  createUser = (event) => {
    event.preventDefault();

    if(this.state.password !== this.state.cPassword){
      alert('Passwords do not match!')
    }
    this.props.userCreation(this.state);
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
        <form className="form" onSubmit = {this.createUser}>
            <div className="form__group">
                <input type="text"  placeholder="Username" className="form__input" onChange = {(event) => this.handleInputChange(event, 'userName')}/>
            </div>

            <div className="form__group">
                <input type="email"  placeholder="Email" className="form__input" onChange = {(event) => this.handleInputChange(event, 'email')}/>
            </div>

            <div className="form__group">
                <input type="password"  name="password" placeholder="Password" className="form__input" onChange = {(event) => this.handleInputChange(event, 'password')}/>
            </div>

            <div className="form__group">
                <input type="password"  name="cPassword" placeholder="Confirm password" className="form__input" onChange = {(event) => this.handleInputChange(event, 'cPassword')}/>
            </div>
            <button className="btn"  type="submit">Register</button>
            {this.props.registerSuccess && <Redirect to='/Login'/>}
        </form>
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
