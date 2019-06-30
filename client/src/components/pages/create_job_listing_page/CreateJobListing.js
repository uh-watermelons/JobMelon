import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import './CreateJobListing.css'
import CurrencyInput from 'react-currency-input';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

class CreateJobListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobName: '',
      cityName: '',
      stateCode: '',
      description: '',
      price: 0,
    };
  }

  handleChange = (event) => {
    const field = event.target.name;
    this.setState(
      { [field]: event.target.value}
      );
  }
  handlePriceChange = (event, maskedvalue, floatvalue) => {
    this.setState({price: floatvalue});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newListing = {
      jobName: this.state.jobName,
      cityName: this.state.cityName,
      stateCode: this.state.stateCode,
      description: this.state.description,
      price: this.state.price,
      owner: this.props.auth.user.id,
      ownerName: this.props.auth.user.name,
      complete: false
    }
    console.log(newListing);
    const url = '/api/listings/create/' + this.props.auth.user.id;
    axios
      .post(url, newListing)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    this.props.history.push('/');
  }

  render() {
      return (
      <div className="CreateJobListing">
        <Header />
        <div className="CreateJobListing-container">
          <form noValidate onSubmit={this.handleSubmit} id="CreateJobListing-form">
            <h3>Create Job Listing</h3>
            <fieldset>
              <input 
                name="jobName" 
                value={ this.state.jobName } 
                onChange={ this.handleChange } 
                placeholder="Job Name" 
                type="text" 
                tabIndex="1" 
                required
                autoFocus/>
            </fieldset>
            <fieldset>
              <input 
                name="cityName" 
                value={ this.state.cityName } 
                onChange={ this.handleChange } 
                placeholder="City" 
                type="text" 
                tabIndex="2" 
                required/>
            </fieldset>
            <fieldset>
              <input 
                name="stateCode" 
                value={ this.state.stateCode } 
                onChange={ this.handleChange } 
                placeholder="State" 
                type="text" 
                tabIndex="3" 
                required/>
            </fieldset>
            <fieldset>
              <textarea 
                name="description" 
                value={ this.state.description } 
                onChange={ this.handleChange } 
                placeholder="Job Description" 
                tabIndex="4" 
                required>
                </textarea>
            </fieldset>
            <label>Price</label>
            <CurrencyInput ref="priceInput" prefix="$" value={this.state.price} onChangeEvent={this.handlePriceChange}/>
            <fieldset>
              <button 
                name="submit" 
                type="submit" 
                id="listing-submit" 
                data-submit="...Sending">Post</button>
            </fieldset>
            <p className="cancel"><Link to="/profile">Cancel</Link></p>
          </form>
        </div>
        <Footer />
      </div>
      );
  }
}


CreateJobListing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(CreateJobListing);