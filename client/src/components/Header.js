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
                <Link style={style} to="/"><a>Home</a></Link>
                <Link style={style} to="/profile"><a>Profile</a></Link>
                <Link style={style} to="/"><a>Messages</a></Link>
                <Link style={style} to="/login"><a>Log In</a></Link>
                <Link style={style} to="/register"><a>Sign Up</a></Link>
            </nav>
          </div>
        </header>
      );      
    }
  }


export default Header;
