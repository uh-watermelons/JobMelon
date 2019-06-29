import React, { Component } from 'react';
import watermelon from "../../../images/watermelon.svg";
import { Link } from 'react-router-dom';

class JobListing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const {
        _id,
        jobName,
        price,
        cityName,
        stateCode,
        description,
        datePosted
      } = this.props.data;

    const listingStyle = {
      borderBottom: "1px solid black",
      paddingBottom: "1em"
    };
    const linkToJob = '/job/' + _id;
    return (
      <div style={listingStyle} className="Listing">
        <h3>{ jobName }</h3>
        <h4>${ price }</h4>
        <p>{cityName}, {stateCode}</p>
        <p>{description}</p>
        <p>Created: {datePosted}</p>
        <Link className="job-listing-button" to={linkToJob}>View Job</Link>
      </div>
      );
  }
}

export default JobListing;
