import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import VariablesTitle from './components/layout/VariablesTitle';
import Variables from './components/Variables';


class App extends Component {
  render() {
    console.log("Hello")
    return (
      <div>
          <Header />
          <p>
            ADD DISPLAYS HERE
          </p>
          <VariablesTitle />
          <Variables />
          <Footer />
      </div>
    );
  }
}

export default App;
