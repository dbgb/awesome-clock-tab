import React, { Component } from 'react';
import Clock from 'react-live-clock';
import ReactFitText from 'react-fittext';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <ReactFitText compressor={0.3}>
            <h1>
              <Clock format="HH:mm:ss" ticking={true} interval={1000} />
            </h1>
          </ReactFitText>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
