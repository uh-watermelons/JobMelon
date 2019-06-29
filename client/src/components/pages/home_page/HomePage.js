import React, { Component } from 'react';
import JobListing from "./JobListing";
import Header from '../../Header';
import Footer from '../../Footer';
import axios from 'axios';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      listings: []
    })
  }

  getDatabase = () => {
    axios.get('/api/listings')
    .then(res => {
      console.log(res.data);
      this.setState({listings: res.data})
    })
    .catch(err => {
      console.log(err);
    });
  }
  // Grab listings from Mongo
  componentDidMount() {
    this.getDatabase();
  }

  render() {
    const Listings = this.state.listings.map((listing) => {
      return !listing.complete ? <JobListing data={listing}/> : null;
    });
    return (
      <div className="HomePage">
        <Header />
        <h1 className="homepage-header">Current Job Listings</h1>
      	<div className="job-listings-layout">
      	{ Listings }
        </div>
        <Footer />
      </div>
      );
  }
}

const Listings = (props) => {
  console.log(props.data);
  return (<div>Hello</div>);
}

export default HomePage;
