import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './CreateJobListing.css'

class CreateJobListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobName: '',
      location: '',
      description: '',
      //price: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const field = event.target.name;
    this.setState(
      { [field]: event.target.value}
      );
  }

  handleSubmit(event) {
    event.preventDefault();
    // TO-DO
  }

  render() {
      return (
      <div className="CreateJobListing">
        <Header />
        <div className="CreateJobListing-container">
          <form id="CreateJobListing-form">
            <h3>Create Job Listing</h3>
            <fieldset>
              <input name="jobName" value={ this.state.jobName } onChange={ this.handleChange } placeholder="Job Name" type="text" tabindex="1" required autofocus/>
            </fieldset>
            <fieldset>
              <input name="location" value={ this.state.location } onChange={ this.handleChange } placeholder="City and State" type="text" tabindex="2" required/>
            </fieldset>
            <fieldset>
              <textarea name="description" value={ this.state.description } onChange={ this.handleChange } placeholder="Job Description" tabindex="3" required></textarea>
            </fieldset>
            <fieldset>
              <input name="price" value={ this.state.price } onChange={ this.handleChange } placeholder="Price" type="text" tabindex="4" step="any" required autofocus/>
            </fieldset>
            <fieldset>
              <button name="submit" type="submit" id="listing-submit" data-submit="...Sending">Post</button>
            </fieldset>
            <p className="cancel"><a href="#" title="Cancel">Cancel</a></p>
                  </form>
        </div>
        <Footer />
      </div>
      );
  }
}


export default CreateJobListing;