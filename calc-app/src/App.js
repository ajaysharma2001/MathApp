import React, { Component } from 'react';
import logo from './MathForYou.svg';
import './App.css';

class App extends Component {
  render() {
    console.log("Hello")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <br/>Christian Channel
            <br/>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>
      </div>
    );
  }
}

export default App;
