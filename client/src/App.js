import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';


class App extends Component {

  state = {
    loggedIn: false
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
      );
  }
}


export default App;
