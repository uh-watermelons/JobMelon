import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/home_page/HomePage';
import JobListingDetailed from './components/pages/job_listing_detailed_page/JobListingDetailed';
import './App.css';


/* Import for dummy data */
import { defaultData as jobs } from './temp/defaultData';

class App extends Component {

  state = {
    loggedIn: false
  }

 
  render() {

    console.log(jobs);

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


    return (
      <div className="App">
      {listingPage}
      {homePage}
      </div>
      );
  }
}


export default App;
