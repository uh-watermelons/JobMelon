import React, { Component } from 'react';
import ContactUs from './pages/contact_us/ContactUs';
import { Link, withRouter } from 'react-router-dom';

class Footer extends Component {
  render() {
    const style = {
      color: 'white'
    }
    return (
    	<footer className="Footer">
			<p>Copyright © 2019 Team Watermelon All rights reserved.</p>
		  	<Link to="/contactus" style={style}><p>Contact Us</p></Link>
		  	<p>Terms of Use</p>
		  	<p> Privacy Policy</p>
		  	<p>Cookie Policy</p>
		 </footer>
      );
  }
}


export default Footer;
