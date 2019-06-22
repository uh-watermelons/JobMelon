import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/home_page/HomePage';
import JobListingDetailed from './pages/job_listing_detailed_page/JobListingDetailed';
import CreateJobListing from './pages/create_job_listing_page/CreateJobListing';
import Profile from './pages/profile_page/Profile';
import './App.css';


/* Import for dummy data */
import { listings as jobs } from './data/listings';
import { users } from './data/users';


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

    return (
      <div className="App">
      {homePage}
      </div>
      );
  }
}


export default App;
