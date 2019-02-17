import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';


class App extends Component {
  render() {
    console.log("Hello")
    return (
      <div>
          <Header />
          <p>
            BODY
          </p>
      </div>
    );
  }
}

export default App;
