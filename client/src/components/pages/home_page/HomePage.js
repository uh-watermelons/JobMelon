import React, { Component } from 'react';
import JobListing from "./JobListing";
import Header from '../../Header';
import Footer from '../../Footer';
import axios from 'axios';
class HomePage extends Component {

//   state = {
// // add profile here?
//   }
  constructor(props) {
    super(props);

    this.state = ({
      listings: []
    })
  }

  getDatabase = () => {
    //axios.get('/currentjobs')
    fetch('/currentjobs')
    .then(res => {
      console.log(res.data);
      //this.setState({listings: res.data})
      this.setState({
        listings: res.data.map((listing) =>
            <JobListing
                jobName={listing.jobName}
                price={listing.price}
                //picture={ listing.picture }
                location={listing.cityName}
            />
        )
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
  // Grab listings from Mongo
  componentDidMount() {

    // .then(res => res.json())
    // .then(data => {
    //   //this.state.listings = data;

    //   const jobs = data.data;
    //   this.state.listings = jobs.map((listing) =>
    //       <JobListing
    //           jobName={ listing.jobName }
    //           price={ listing.price }
    //           //picture={ listing.picture }
    //           location={ listing.cityName}
    //       />
    //   );
    // });
    this.getDatabase();
    console.log("Testing getDB!");
    console.log(this.state);
    console.log("Testing getDB!!");
  }

  render() {

    return (
      <div className="HomePage">
        <Header />
        <h1 className="homepage-header">Current Job Listings</h1>
      	<div className="job-listings-layout">
      	<Listings data={this.listings}/>
        </div>
        <Footer />
      </div>
      );
  }
}

const Listings = (props) => {
  console.log("Testing!");
  console.log(props.data);
  console.log("Testing!!");
  return (<div>Hello</div>);
}

export default HomePage;
