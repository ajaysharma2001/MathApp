import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


class App extends Component {
  render() {
    console.log("Hello")
    return (
      <div>
          <Header />
          <p>
            BODY
          </p>
          <Footer />
      </div>
    );
  }
}

export default App;
