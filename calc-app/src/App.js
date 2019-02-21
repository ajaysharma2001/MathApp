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
import Prism from './components/ThreeD';


class App extends Component {
  constructor() {
    super();
    this.state = {
      length: 100,
      width: 100,
      x: 10,
      showFirstDerivitive: false,
      showSecondDerivitive: false,
      margin: (window.innerHeight >= 605) ? 605 : window.innerHeight - 100
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if(window.innerHeight <= 700) {
      this.setState({margin: window.innerHeight - 100});
    }
    else {
      this.setState({margin: 605});
    }
  }

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

  onFirstDerivitiveClick = () => {
    this.setState({ showFirstDerivitive: !this.state.showFirstDerivitive });
  }

  onSecondDerivitiveClick = () => {
    this.setState({ showSecondDerivitive: !this.state.showSecondDerivitive });
  }

  render() {
    return (
      <div>
          <Header />
          <div style = {rowStyle}>
            <div style = {col}>
              {/* Where the graph will go */}
              <LineGraph length={this.state.length} width={this.state.width} x={this.state.x} showFirstDerivitive={this.state.showFirstDerivitive} showSecondDerivitive={this.state.showSecondDerivitive} />
              <div style = {checkboxStyle} style = {{ marginTop: this.state.margin }}>
                <input type="checkbox" onChange={this.onFirstDerivitiveClick}/> {" "}
                  { 'Show First Derivitive' } {"   "}
                <input type="checkbox" onChange={this.onSecondDerivitiveClick}/> {" "}
                  { 'Show Second Derivitive' }
              </div>
            </div>
          </div>
          <div style = {rowStyle}>
            <div style = {col}>
              <Sheet BigRedRectangleHeight={this.state.length} BigRedRectangleWidth={this.state.width} SliderValueforCorner={this.state.x}/>
            </div>
            <div style = {col}>
              {/* Where the 3D display will go */}
              <Prism BigRedRectangleHeight={this.state.length} BigRedRectangleWidth={this.state.width} SliderValueforCorner={this.state.x}/>
            </div>

          </div>



          <div style = {backgroundStyle}></div>
          <div style = {inputStyle}>
            <VariablesTitle />
            <Variables changeLength={this.onChangeLength} changeWidth={this.onChangeWidth} changeCutout={this.onChangeCutout}/>
            <Footer />
          </div>



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
  width: '50%',
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
}

const checkboxStyle = {
  background: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px #ccc dotted'
}

const inputStyle = {
  position: 'fixed',
  bottom: '0%',
  right: '0%',
  left: '0%',
}

const backgroundStyle = {
  position: 'fixed',
  bottom: '0%',
  right: '0%',
  left: '0%',
  top: '75%',
  backgroundColor: 'rgba(249,250,252, 0.8)',
  filter: 'blur(15px)'
}

export default App;
