import React, { Component } from 'react';
import ContactUs from './pages/contact_us/ContactUs';
import TermsOfUse from './pages/terms_of_use/TermsOfUse';
import PrivacyPolicy from './pages/privacy_policy/PrivacyPolicy';
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
		  	<Link to="/terms" style={style}><p>Terms of Use</p></Link>
		  	<Link to="/privacy" style={style}><p>Privacy Policy</p></Link>
		 </footer>
      );
  }
}


export default Footer;
