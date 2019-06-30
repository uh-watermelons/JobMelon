import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './ContactUs.css'

class ContactUs extends Component {

  render() {
    return (
      <div className="ContactUs">
        <Header />
        <div>
          <div class="center">
            <br></br>
            <br></br>
            <h2 id="contact-us">Contact Us</h2>
            <p>If you have any comments, concerns, feature requests, <br></br>
            bug reports, or anything else, feel free to contact us at</p>
            <a href="mailto:info@jobmelon.com">info@jobmelon.com</a>
            <br></br>
            <br></br>
            <p>Thanks for using JobMelon!</p>
            <br></br>
            <br></br>
          </div>
        </div>
        <Footer />
      </div>
      );
  }
}


export default ContactUs;
