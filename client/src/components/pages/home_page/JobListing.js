import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class JobListing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  routeChange = () => {
    const linkToJob = '/job/' + this.props.data._id;
    this.props.history.push(linkToJob);
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
    let formattedDate = moment(datePosted).format("dddd, MMMM Do YYYY, hA");
    const listingStyle = {
      borderBottom: "0.1px solid grey",
      paddingBottom: "1em"
    };
    return (
      <div onClick={this.routeChange} style={listingStyle} className="Homepage-Listing">
        <h3>{ jobName }</h3>
        <h4>${ price }</h4>
        <p>{cityName}, {stateCode}</p>
        <p>{description}</p>
        <p>Posted: {formattedDate}</p>
      </div>
      );
  }
}

export default withRouter(JobListing);
