import React, { Component } from 'react';
import Clock from 'react-live-clock';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1><Clock class="clock" format="HH:mm:ss" ticking={true} interval={1000} /></h1>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
