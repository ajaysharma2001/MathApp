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
import LineGraph from './components/Graph';
import ThreeScene from './components/ThreeD';

class App extends Component {
  constructor() {
    super();
    this.state = {
      length: 60,
      width: 30,
      x: 3,
    }
  };

  onChangeLength = (value) => {
    this.setState({
      length:value
    });
  }

  onChangeWidth = (value) => {
    this.setState({
      width:value
    });
  }

  onChangeCutout = (value) => {
    this.setState({
      x:value
    });
  }

  render() {
    return (
      <div>
          <Header />
          <div style = {rowStyle}>
            <div style = {col}>
              {/* Where the graph will go */}
              <LineGraph length={this.state.length} width={this.state.width} x={this.state.x}/>
            </div>
            <div style = {col}>
              <Sheet />
            </div>
            <div style = {col}>
              {/* Where the 3D display will go */}
              <ThreeScene />
            </div>

          </div>



          <VariablesTitle />
          <Variables changeLength={this.onChangeLength} changeWidth={this.onChangeWidth} changeCutout={this.onChangeCutout}/>
          <Footer />
      </div>
    );
  }
}

const rowStyle = {
  display: 'flex',
  flexDirection: 'row'
}
const col = {
  textAlign: 'center',
  width: '33.3333%',
  marginTop: '20px',
}
export default App;
