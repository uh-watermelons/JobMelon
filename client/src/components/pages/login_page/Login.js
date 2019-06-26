import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './Login.css'

import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

  }

  handleChange = (event) => {
    event.preventDefault();
    const field = event.target.name;
    this.setState({ 
      [field]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
  }

  render() {
      const { errors } = this.state;

      return (
      <div className="Login">
        <Header />
        <div className="Login-container">
          <form noValidate onSubmit={this.handleSubmit} id="Login-form">
            <h3>Log In</h3>
            <fieldset>
              <input 
                name="email"
                value={ this.state.email } 
                onChange={ this.handleChange } 
                placeholder="Email" 
                type="email" 
                tabIndex="1" 
                required 
                autoFocus/>
            </fieldset>
            <fieldset>
              <input 
                name="password" 
                value={ this.state.password } 
                onChange={ this.handleChange } 
                placeholder="Password" 
                type="password" 
                tabIndex="2" 
                required/>
            </fieldset>
            <button name="submit" type="submit" id="submit-login" data-submit="...Sending">Sign In</button>
            <p className="register">Don't have an account? <Link to="/register">Register</Link></p>
          </form>
        </div>
        <Footer />
      </div>
      );
  }
}
export default Login;