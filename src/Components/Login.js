import React, { Component } from 'react';


class Login extends Component {
  render() {
    return (
      <div className="user">
        <header className="user__header">
            <h1 className="user__title">Login</h1>
        </header>

        <form className="form">

            <div className="form__group">
                <input type="text" placeholder="Username" className="form__input" />
            </div>

            <div className="form__group">
                <input type="password" placeholder="Password" className="form__input" />
            </div>

            <button className="btn" type="button">Login</button>
        </form>
    </div>
    );
  }
}
export default Login;
