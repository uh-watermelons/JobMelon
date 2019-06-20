import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Pages
import App from './components/App';
import Home from './components/pages/home_page/HomePage';
import CreateJobListing from './components/pages/create_job_listing_page/CreateJobListing';
import JobListingDetailed from './components/pages/job_listing_detailed_page/JobListingDetailed';
import Profile from './components/pages/profile_page/Profile';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path='/' component={Home}/>
      <Route exact path='/create' component={CreateJobListing}/>
      // Need to link to jobs stored in database
      <Route exact path='/job' component={JobListingDetailed}/>
    </App>
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
