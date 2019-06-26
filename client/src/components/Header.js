import React, { Component } from 'react';
import watermelon from '../images/watermelon.svg';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

class Header extends Component {

    onLogoutClick = event => {
      event.preventDefault();
      this.props.logoutUser();
    }

    render() {
      const style = {
        color: 'white'
      }

      const { user } = this.props.auth
      console.log(this.props.auth);
      console.log(user);

      return (
        <header style={{backgroundColor: "#71A95A"}} id="Header">
          <div className="header-layout">
            <Link to="/" className="header-item-1" style={style}><h1>
              JobMelon
            </h1>
            </Link>
            <img 
                id="logo"
                src={ watermelon } 
                alt="Watermelon Icon"/>
            <nav className="header-item-2">
                <Link style={style} to="/">Home</Link>
                <Link style={style} to="/profile">Profile</Link>
                <LogoutButton 
                  isAuthenticated={this.props.auth.isAuthenticated}
                  action={this.onLogoutClick}
                  style={style} 
                />
                <LoginButton 
                  isAuthenticated={this.props.auth.isAuthenticated}
                  style={style} 
                />
                <RegisterButton 
                  isAuthenticated={this.props.auth.isAuthenticated}
                  style={style} 
                />
            </nav>
          </div>
        </header>
      );      
    }
  }

// These are used to render either "Log Out" or "Log In / Sign Up"
const LogoutButton = props => (
  props.isAuthenticated 
  ? <Link onClick={props.action} style={props.style}>Log Out</Link>
  : null
);
const LoginButton = props => (
  !props.isAuthenticated 
  ? <Link style={props.style} to="/login">Log In</Link>
  : null
);
const RegisterButton = props => (
  !props.isAuthenticated 
  ? <Link style={props.style} to="/register">Sign Up</Link>
  : null
);



Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
