import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/home_page/HomePage';
import JobListingDetailed from './pages/job_listing_detailed_page/JobListingDetailed';
import CreateJobListing from './pages/create_job_listing_page/CreateJobListing';
import Profile from './pages/profile_page/Profile';
import Register from './pages/register_page/Register';
import Login from './pages/login_page/Login';

import './App.css';

/* Import React Router */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Import for dummy data */
import { listings as jobs } from './data/listings';
import { users } from './data/users';


class App extends Component {

  state = {
    loggedIn: false
  }


  render() {

    const homePage = () =>
        <div>
        <HomePage jobs={jobs}/>
        </div>
        ;

    const listingPage = () =>
      <div>
      <JobListingDetailed listing={ jobs[0] } />
      </div>
      ;
      
    const createJobListingPage =() =>
      <div>
      <CreateJobListing />
      </div>
      ;

    const profilePage = () =>
      <div>
      <Profile user={ users[0] }/>
      </div>

    const loginPage = () =>
      <div>
      <Login />
      </div>

    const registerPage = () =>
      <div>
      <Register />
      </div>

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={homePage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/job" component={listingPage}/>
          <Route exact path="/profile" component={profilePage}/>
        </div>
      </Router>
    );
  }
}


export default App;
