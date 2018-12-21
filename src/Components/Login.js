import React, { Component } from 'react';
import { userLogin } from "../APIs/apiService.js";
import { uLogin } from "../redux/actions/Authorization";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';



class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  handleInputChange(event, name) {
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onLogin = event => {
    event.preventDefault();
    this.props.uLogin(this.state);

  }

  render() {
    if (this.props.loginSuccess) {
      return <Redirect to='/CreateNewPost' />
    }
    return (
      <div className="user">
        <header className="user__header">
            <h1 className="user__title">Login</h1>
        </header>

        <form className="form" onSubmit={this.onLogin}>

            <div className="form__group">
                <input type="text" placeholder="Username" className="form__input" onChange = {(event) => this.handleInputChange(event, 'userName')}/>
            </div>

            <div className="form__group">
                <input type="password" placeholder="Password" className="form__input" onChange = {(event) => this.handleInputChange(event, 'password')}/>
            </div>

            <button className="btn" type="submit" >Login</button>
        </form>
        <p>{this.props.error}</p>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    error: state.error.error,
    loginSuccess: state.auth.loginSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uLogin: (user) => dispatch(uLogin(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
