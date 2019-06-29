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
    return (
      <div style={listingStyle} className="Listing">
        <h3>{ jobName }</h3>
        <h4>${ price }</h4>
        <p>{cityName}, {stateCode}</p>
        <p>{description}</p>
        <p>Created: {datePosted}</p>
        <Link className="job-listing-button" to="/job">View Job</Link>
      </div>
      );
  }
}
/*
      <div className="JobListing" >
        <div className="jobName"><h3>{ name }</h3></div>
        <div className="description">
          <h2 className="price">${ price }</h2>
          <h5 className="location">{ location }</h5>
        </div>
        <div  className="picture">
          <img
          src={ watermelon }
          alt="Default"
          style={{"width":"100%","height":"100%"}}
          />
        </div>
        <Link className="button" to="/job">View Job</Link>
      </div>
*/
export default JobListing;
