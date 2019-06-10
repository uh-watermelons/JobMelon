import React from 'react';

function Header(props) {
    return (
      <header className="Header">
        <h1>JobMelon</h1>
        <nav>
        	<ul style={{padding:0}}>
          		<li>Home</li>
          		<li>About us</li>
          	</ul>
        </nav>
      </header>
      );
  }


export default Header;
