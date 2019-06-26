import React, { Component } from 'react';
import watermelon from '../images/watermelon.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
    
    state = {

    }
    render() {
      const style = {
        color: 'white'
      }

      return (
        <header className="Header">
          <div className="header-layout">
            <Link style={style} to="/"><h1 className="header-item-1">
              JobMelon
            </h1>
            </Link>
            <img src={ watermelon } 
                alt="Watermelon Icon"/>
            <nav className="header-item-2">
                <Link style={style} to="/">Home</Link>
                <Link style={style} to="/profile">Profile</Link>
                <Link style={style} to="/">Messages</Link>
                <Link style={style} to="/login">Log In</Link>
                <Link style={style} to="/register">Sign Up</Link>
            </nav>
          </div>
        </header>
      );      
    }
  }


export default Header;
