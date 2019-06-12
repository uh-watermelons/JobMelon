import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './components/pages/home_page/HomePage';
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
      "location": "Honolulu, HI"
    },
    {
      "price": 30,
      "jobName": "Need Printer Repair",
      "picture": "none yet",
      "location": "Wahiawa, HI"
    },
    {
      "price": 200,
      "jobName": "Dog Walking",
      "picture": "none yet",
      "location": "Kailua"
    },
    {
      "price": 5,
      "jobName": "I Need a Friend",
      "picture": "none yet",
      "location": "Honolulu, HI"
    },
  ];

  render() {
    return (
      <div className="App">
        <Header />
        <HomePage jobs={this.jobs}/>
      </div>
      );
  }
}


export default App;
