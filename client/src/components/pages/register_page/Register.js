import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './Register.css'

import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      role: ''
    };

  }

  handleChange = (event) => {
    event.preventDefault();
    const field = event.target.name;
    this.setState({ 
      [field]: event.target.value
    });
  }

  handleRadioChange = (event) => {
    this.setState({
      role: event.target.value 
    });
  }

  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    // TO-DO
    /* Password requirements:
      1. At least 1 uppercase, lowercase, special character, and number
      2. At least 15 characters long
      3. Hashed (maybe by bcrypt)
      emails:
        For testing purposes, maybe don't check validity
    */
  }

  render() {
      return (
      <div className="Register">
        <Header />
        <div className="Register-container">
          <form id="Register-form">
            <h3>Sign Up</h3>
            <fieldset>
              <input 
                name="email"
                value={ this.state.email } 
                onChange={ this.handleChange } 
                placeholder="Email" 
                type="text" 
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
                type="text" 
                tabIndex="2" 
                required/>
            </fieldset>
            <fieldset>
              <p>You will be a...</p>
              <input 
                value="client"
                checked={ this.state.role === "client" } 
                onChange={ this.handleRadioChange } 
                type="radio" 
                name="role" 
                />Client
              <input 
                value="contractor" 
                checked={ this.state.role === "contractor" } 
                onChange={ this.handleRadioChange }
                type="radio" 
                name="role" 
                />Contractor
            </fieldset>
            <button name="submit" type="submit" id="submit-register">Sign Up</button>
            <p className="register">Have an account? <Link to="/login"><a title="login">Log In</a></Link></p>
          </form>
        </div>
        <Footer />
      </div>
      );
  }
}


export default Register;