import React, { Component } from 'react';
import JobListing from "./JobListing";
import Header from '../../Header';
import Footer from '../../Footer';

class HomePage extends Component {

//   state = {
// // add profile here?
//   }
  constructor(props) {
    super(props);

    this.state = ({
      listings: ''
    })
  }

  // Grab listings from Mongo
  componentDidMount() {
    fetch('/currentjobs')
    .then(res => res.json())
    .then(data => {
      this.setState({ listings: data})
    })
  }

  render() {

    const jobs = this.props.jobs;
    this.state.listings = jobs.map((listing) =>
      <JobListing
      jobName={ listing.jobName }
      price={ listing.price }
      picture={ listing.picture }
      location={ listing.location}
      />
      );

    return (
      <div className="HomePage">
        <Header />
        <h1 className="homepage-header">Current Job Listings</h1>
      	<div className="job-listings-layout">
          { this.state.listings }
      	</div>
        <Footer />
      </div>
      );
  }
}

export default HomePage;
