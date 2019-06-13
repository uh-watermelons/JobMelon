import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/home_page/HomePage';
import JobListingDetailed from './components/pages/job_listing_detailed_page/JobListingDetailed';
import CreateJobListing from './components/pages/create_job_listing_page/CreateJobListing';
import './App.css';


/* Import for dummy data */
import { defaultData as jobs } from './temp/defaultData';

class App extends Component {

  state = {
    loggedIn: false
  }

 
  render() {

    const homePage = 
        <div>
        <HomePage jobs={jobs}/>
        </div>
        ;

    const listingPage = 
      <div>
      <JobListingDetailed listing={ jobs[0] } />
      </div>
      ;
      
    const createJobListingPage =
      <div>
      <CreateJobListing />
      </div>
      ;

    return (
      <div className="App">
      {createJobListingPage}
      {homePage}
      {listingPage}
      </div>
      );
  }
}


export default App;
