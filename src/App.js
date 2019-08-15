import React, { Component } from "react";
import Clock from "react-live-clock";
import logo from "./img/logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock
            className="clock"
            format="HH:mm:ss"
            ticking={true}
            interval={1000}
          />
          <div className="App-logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
