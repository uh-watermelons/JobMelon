import React from 'react';
import watermelon from '../images/watermelon.svg';

function Header(props) {
    return (
      <header className="Header">
        <div className="header-layout">
          <h1 className="header-item-1">
            JobMelon
          </h1>
          <img src={ watermelon } 
              alt="Watermelon Icon"/>
          <nav className="header-item-2">
            	<a href="#">Home</a>
            	<a href="#">Log In</a>
              <a href="#">Sign Up</a>
          </nav>
        </div>
      </header>
      );
  }


export default Header;
