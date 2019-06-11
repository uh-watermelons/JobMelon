import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import './App.css';


class App extends Component {

  state = {
    loggedIn: false
  }

  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
      );
  }
}


export default App;
