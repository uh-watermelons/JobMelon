import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './Login.css'

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/'); // Redirect to Home upon logging in
    }
    if(nextProps.errors) {
      console.log(this.state.errors);
      this.setState({
        errors: nextProps.errors
      });
    }
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
    };
    // Log user in!
    this.props.loginUser(userData);
    // We don't pass in the history (as opposed to Register.js)
    // Because we redirect through our component
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);