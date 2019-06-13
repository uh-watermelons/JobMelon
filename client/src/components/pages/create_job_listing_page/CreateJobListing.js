import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './CreateJobListing.css'

class CreateJobListing extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
      return (
      <div className="CreateJobListing">
        <Header />
        <div className="CreateJobListing-container">
          <form id="CreateJobListing-form">
            <h3>Colorlib Contact Form</h3>
            <h4>Contact us for custom quote</h4>
            <fieldset>
              <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
            </fieldset>
            <fieldset>
              <input placeholder="Your Email Address" type="email" tabindex="2" required/>
            </fieldset>
            <fieldset>
              <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
            </fieldset>
            <fieldset>
              <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required/>
            </fieldset>
            <fieldset>
              <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
            </fieldset>
            <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
            <p className="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
                  </form>
        </div>
        <Footer />
      </div>
      );
  }
}


export default CreateJobListing;