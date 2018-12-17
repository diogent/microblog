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
    this.validateForm = this.validateForm.bind(this);
  }


  validateForm() {
    let isValid = true;
    for (var property in this.state) {
    if (this.state.hasOwnProperty(property)) {
        if (!this.state[property].value) {
          isValid = false;
          this.setState({[property]: {...this.state[property], error: `Enter ${property}`}});
        }
      }
    }
    if(this.state.password.value !== this.state.cPassword.value){
      isValid = false;
      this.setState({cPassword: {...this.state.user, error: "Passwords do not match!"}});
    }
    return isValid;
  }


  handleInputChange(event, name) {
    const value = event.target.value;
    this.setState({
      [name]: {value: value}
    });
  }


  createUser = (event) => {
    event.preventDefault();
    let isValid = this.validateForm();
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
                <p>{this.state.userName.error}</p>
            </div>

            <div className="form__group">
                <input type="email"  placeholder="Email" className="form__input" onChange={(event) => this.handleInputChange(event, 'email')}/>
                <p>{this.state.email.error}</p>
            </div>

            <div className="form__group">
                <input type="password"  name="password" placeholder="Password" className="form__input" onChange={(event) => this.handleInputChange(event, 'password')}/>
                <p>{this.state.password.error}</p>
            </div>

            <div className="form__group">
                <input type="password"  name="cPassword" placeholder="Confirm password" className="form__input" onChange={(event) => this.handleInputChange(event, 'cPassword')}/>
                <p>{this.state.cPassword.error}</p>
            </div>
            <button className="btn"  type="submit">Register</button>
            <p>{this.props.error}</p>
            { this.props.registerSuccess &&  <Redirect to="/Login"/> }
        </form>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    error: state.error.error,
    registerSuccess: state.auth.registerSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userCreation: (user) => dispatch(userCreation(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
