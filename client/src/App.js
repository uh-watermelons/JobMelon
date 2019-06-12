import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './components/pages/home_page/HomePage';
import JobListingDetailed from './components/pages/job_listing_detailed_page/JobListingDetailed';
import './App.css';


class App extends Component {

  state = {
    loggedIn: false
  }

  jobs = [
    {
      "price": 20.5,
      "jobName": "Lawn Mowing",
      "picture": "none yet",
      "location": "Honolulu, HI",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "price": 30,
      "jobName": "Need Printer Repair",
      "picture": "none yet",
      "location": "Wahiawa, HI",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "price": 200,
      "jobName": "Dog Walking",
      "picture": "none yet",
      "location": "Kailua",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "price": 5,
      "jobName": "I Need a Friend",
      "picture": "none yet",
      "location": "Honolulu, HI",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ];

  render() {

    const homePage = 
        <div>
        <Header />
        <HomePage jobs={this.jobs}/>
        </div>
        ;

    const listingPage = 
      <div>
      <JobListingDetailed listing={ this.jobs[0] } />
      </div>
      ;


    return (
      <div className="App">
      {homePage}
      {listingPage}
      </div>
      );
  }
}


export default App;
