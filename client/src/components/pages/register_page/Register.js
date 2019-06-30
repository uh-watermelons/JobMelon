import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import Errors from '../errors/Errors';
import './Register.css'

import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authActions';
import object from 'lodash';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      password: '',
      password2: '',
      errors: [],
      role: 'client'
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      console.log(nextProps.errors);
      this.setState({
        errors: object.values(nextProps.errors)
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

  handleRadioChange = (event) => {
    this.setState({
      role: event.target.value 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      role: this.state.role
    };

    // Registers users!
    this.props.registerUser(newUser, this.props.history);
  }


  render() {
      const { errors } = this.state;

      return (
      <div className="Register">
        <Header />
        <div className="Register-container">
          <form noValidate onSubmit={this.handleSubmit} id="Register-form">
            <h3>Sign Up</h3>
            <Errors errors={this.state.errors} />
            <fieldset>
              <input 
                name="firstName"
                value={ this.state.firstName } 
                onChange={ this.handleChange } 
                placeholder="First name" 
                type="text" 
                tabIndex="1" 
                required 
                autoFocus/>
            </fieldset>
            <fieldset>
              <input 
                name="email"
                value={ this.state.email } 
                onChange={ this.handleChange } 
                placeholder="Email" 
                type="email" 
                tabIndex="2" 
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
                tabIndex="3" 
                required/>
            </fieldset>
            <fieldset>
              <input 
                name="password2" 
                value={ this.state.password2 } 
                onChange={ this.handleChange } 
                placeholder="Confirm password" 
                type="password" 
                tabIndex="4" 
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
            <button name="submit" type="submit" id="submit-register">Register</button>
            <p className="register">Have an account? <Link to="/login">Log In</Link></p>
          </form>
        </div>
        <Footer />
      </div>
      );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
  )(withRouter(Register));