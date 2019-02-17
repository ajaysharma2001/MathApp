import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import VariablesTitle from './components/layout/VariablesTitle';
import Variables from './components/Variables';
import Sheet from './components/Sheet';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
class App extends Component {
  render() {
    console.log("Hello")
    return (
      <div>
          <Header />
          <p>
            <Sheet />
          </p>
          <VariablesTitle />
          <Variables />
          <Footer />
      </div>
    );
  }
}

export default App;
