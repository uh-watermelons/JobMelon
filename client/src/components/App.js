import React, { Component } from 'react';
import HomePage from './pages/home_page/HomePage';
import JobListingDetailed from './pages/job_listing_detailed_page/JobListingDetailed';
import CreateJobListing from './pages/create_job_listing_page/CreateJobListing';
import Profile from './pages/profile_page/Profile';
import Register from './pages/register_page/Register';
import Login from './pages/login_page/Login';

import { Provider } from 'react-redux';
import store from '../store';

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

    const profilePage = () =>
      <div>
      <Profile user={ users[0] }/>
      </div>

    const createJobPage = () =>
      <div>
      <CreateJobListing />
      </div>



    return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={homePage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/job/:listingId" component={JobListingDetailed}/>
          <Route exact path="/profile" component={profilePage}/>
          <Route exact path="/createjob" component={createJobPage}/>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;


