import React, { Component } from 'react';
import {userCreate} from "../APIs/apiService.js"


class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: undefined,
      email: undefined,
      password: undefined,
      cPassword: undefined
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
    var user = {
      user: this.state.userName,
      userEmail: this.state.email,
      userPassword: this.state.password
    }
    if(this.state.password === this.state.cPassword){
      userCreate(user);
    }
}

  render() {
    return (
      <div className="user">
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
                <input type="password"  name = "password" placeholder="Password" className="form__input" onChange = {(event) => this.handleInputChange(event, 'password')}/>
            </div>

            <div className="form__group">
                <input type="password"  name = "cPassword" placeholder="Confirm password" className="form__input" onChange = {(event) => this.handleInputChange(event, 'cPassword')}/>
            </div>
            <button className="btn"  type = "submit">Register</button>
        </form>
    </div>
    );
  }
}
export default RegisterForm;
