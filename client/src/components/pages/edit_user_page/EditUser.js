import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Errors from '../errors/Errors';
import './EditUser.css'

import object from 'lodash';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      ccNumber: '',
      ccSecurityCode: '',
      ccExpiryDate: '',
      errors: []
    };
  }
  componentDidMount() {
    // Connect to redux store to get auth info
    // Look at Header.js for example
    // Once you get auth info you get the userID
    if(this.props.auth.isAuthenticated) {
      let userId = this.props.auth.user.id; // TODO
      let url = '/api/user/' + userId + '';
      axios
        .get(url)
        .then(res => {this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          ccNumber: res.data.ccNumber,
          ccSecurityCode: res.data.ccSecurityCode,
          ccExpiryDate: res.data.ccExpiryDate
          })
        })
        .catch(err => console.log(err));   
      }
  }

  handleChange = (event) => {
    const field = event.target.name;
    this.setState(
      { [field]: event.target.value}
      );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      ccNumber: this.state.ccNumber,
      ccSecurityCode: this.state.ccSecurityCode,
      ccExpiryDate: this.state.ccExpiryDate
    };
    const url = '/api/user/edit/' + this.props.auth.user.id + '';
    axios
      .post(url, updatedUser)
      .then(res => {
        console.log(res);    
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err);
        this.setState({errors:object.values(err.response.data)});
      });
  }

  render() {
      return (
      <div className="EditUser">
        <Header />
        <div className="EditUser-container">
          <form noValidate onSubmit={this.handleSubmit} id="EditUser-form">
            <h3>Update Information</h3>
            <Errors errors={this.state.errors} />
            <fieldset>
              <label>First Name (required)</label>
              <input 
                name="firstName" 
                value={ this.state.firstName } 
                onChange={ this.handleChange } 
                placeholder="Required" 
                type="text" 
                required
                autoFocus/>
            </fieldset>
            <fieldset>
              <label>Last Name</label>
              <input 
                name="lastName" 
                value={ this.state.lastName } 
                onChange={ this.handleChange } 
                placeholder="Optional" 
                type="text" 
                required/>
            </fieldset>
            <fieldset>
              <label>Email (required)</label>
              <input 
                name="email" 
                value={ this.state.email } 
                onChange={ this.handleChange } 
                placeholder="Required" 
                type="email" 
                required/>
            </fieldset>
            <fieldset>
              <label>Payment Information</label>
              <input 
                name="ccNumber" 
                value={ this.state.ccNumber } 
                onChange={ this.handleChange } 
                placeholder="Card Number" 
                type="text" 
                required/>
              <input 
                name="ccExpiryDate" 
                value={ this.state.ccExpiryDate } 
                onChange={ this.handleChange } 
                placeholder="Expiration Date" 
                type="text" 
                required/>
              <input 
                name="ccSecurityCode" 
                value={ this.state.ccSecurityCode } 
                onChange={ this.handleChange } 
                placeholder="Security #" 
                type="text" 
                required/>
            </fieldset>
            <fieldset>
              <button 
                name="submit" 
                type="submit" 
                id="listing-submit" 
                data-submit="...Sending">Update</button>
            </fieldset>
            <p className="cancel"><Link to="/profile">Cancel</Link></p>
          </form>
        </div>
        <Footer />
      </div>
      );
  }
}


EditUser.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(EditUser);