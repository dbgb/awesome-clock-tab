import React, { Component } from "react";
import Clock from "react-live-clock";
import moment from "moment";
import logo from "./img/logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
    };
  }

  toggleAnimation = () => {
    this.setState({ animated: !this.state.animated });
  };

  render() {
    // Guess user timezone using I18n API
    // re: https://momentjs.com/timezone/docs/#/using-timezones/guessing-user-timezone/
    const timezone = moment.tz.guess();

    return (
      <div className="App">
        <header className="App-header">
          <Clock
            className="clock"
            format="HH:mm:ss"
            timezone={timezone}
            interval={1000}
            ticking
          />
          <div
            className={
              this.state.animated
                ? "App-logo-container"
                : "App-logo-container paused"
            }
          >
            <img
              onClick={this.toggleAnimation}
              onDragStart={(e) => e.preventDefault()}
              src={logo}
              className="App-logo"
              alt="awesome face logo"
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
