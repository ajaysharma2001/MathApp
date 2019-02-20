import {LineChart} from 'react-easy-chart';
import React, { Component } from 'react';


var currentMaxVolume = 5195.987999999999;
var currentMinVolume = 0;

class Graph extends Component {
  constructor() {
    super();
    const initialWidth = window.innerWidth > 0 ? window.innerWidth : 600;
    const initialHeight = window.innerHeight > 0 ? window.innerHeight : 600;
    this.state = {
      windowWidth: window.innerWidth/3.2,
      windowHeight: (window.innerHeight >= 600) ? 600 : window.innerHeight - 100
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth/3.2});
    if(window.innerHeight <= 700) {
      this.setState({windowHeight: window.innerHeight - 100});
    }
    else {
      this.setState({windowHeight: 600});
    }
  }

  getCurrentPoint(length, width, x) {
    var point = LineChart.data = { x: x, y:(length - 2*x) *(width - 2 *x) *x };
    var arr = [point];
    return [arr];
  }

  createXAxis(length, width) {
    var POne = LineChart.data = { x:0, y:0 };
    var PTwo = LineChart.data = { x:this.maxCutout(length, width), y:0 };
    var arr = [POne, PTwo];
    return arr;
  }

  getCurrentPointPrime(length, width, x, showFirstDerivitive) {
    if(!showFirstDerivitive) {
      return [];
    }
    var point = LineChart.data = { x: x, y:(12*x*x) + (-4*width - 4*length)*x + length * width };
    var arr = [point];
    return [arr];
  }

  getCurrentPointDoublePrime(length, width, x, showSecondDerivitive) {
    if(!showSecondDerivitive) {
      return [];
    }
    var point = LineChart.data = { x: x, y: 4 * (6*x - width - length) };
    var arr = [point];
    return [arr];
  }

  getData = (min, max, step, length, width, showFirstDerivitive, showSecondDerivitive) => {
    var returnArray = [this.createXAxis(length,width)];
    var dataArray = [];
    currentMaxVolume = 0;
    currentMinVolume = 0;
    for(var i = min; i < max; i += step) {
      var point = LineChart.data = { x: i, y:(length - 2*i) *(width - 2 *i) *i };
      if(point.y > currentMaxVolume) {
        currentMaxVolume = point.y;
      }
      dataArray.push(point);
    }

    returnArray.push(dataArray);

    if(showFirstDerivitive) {
      var dataArrayPrime = [];
      for(var i = min; i < max; i += step) {
        var point = LineChart.data = { x: i, y: (12*i*i) + (-4*width - 4*length)*i + length * width };
        if(point.y > currentMaxVolume) {
          currentMaxVolume = point.y;
        }
        if(point.y < currentMinVolume) {
          currentMinVolume = point.y;
        }
        dataArrayPrime.push(point);
      }
  
      returnArray.push(dataArrayPrime);
    }
    
    if(showSecondDerivitive) {
      var dataArrayDoublePrime = [];
      for(var i = min; i < max; i += step) {
        var point = LineChart.data = { x: i, y: 4 * (6*i - width - length) };
        if(point.y > currentMaxVolume) {
          currentMaxVolume = point.y;
        }
        if(point.y < currentMinVolume) {
          currentMinVolume = point.y;
        }
        dataArrayDoublePrime.push(point);
      }
  
      returnArray.push(dataArrayDoublePrime);
    }
    
    return returnArray;
  }

  maxCutout(length, width) {
    if(length > width) {
      return width/2;
    }
    else {
      return length /2;
    }
  }

  getLineColours(showFirstDerivitive, showSecondDerivitive) {
    if(!showFirstDerivitive && showSecondDerivitive) {
      return ['black', 'blue', 'green'];
    }
    return ['black', 'blue', 'red', 'green'];
  }

  render() {
    return (
      <div>
        <div style = {overlap}>
          <LineChart margin={{top: 10, right: 10, bottom: 50, left: 75}} style={{ '.label': { fill: 'black' } }} data={this.getData(0, this.maxCutout(this.props.length, this.props.width), 0.1, this.props.length, this.props.width, this.props.showFirstDerivitive, this.props.showSecondDerivitive)} axes grid verticalGrid axisLabels={{x: 'Cutout Size', y: 'Volume'}} width={this.state.windowWidth} height={this.state.windowHeight} interpolate={'cardinal'} lineColors={this.getLineColours(this.props.showFirstDerivitive, this.props.showSecondDerivitive)}/>
        </div>
        <div style = {overlap}>
          <LineChart margin={{top: 10, right: 10, bottom: 50, left: 75}} data={this.getCurrentPoint(this.props.length,this.props.width,this.props.x)} width={this.state.windowWidth} height={this.state.windowHeight} dataPoints xDomainRange={[0, this.maxCutout(this.props.length, this.props.width)]} yDomainRange={[currentMinVolume, currentMaxVolume]}/>
        </div>
        <div style = {overlap}>
          <LineChart margin={{top: 10, right: 10, bottom: 50, left: 75}} data={this.getCurrentPointPrime(this.props.length,this.props.width,this.props.x,this.props.showFirstDerivitive)} width={this.state.windowWidth} height={this.state.windowHeight} dataPoints xDomainRange={[0, this.maxCutout(this.props.length, this.props.width)]} yDomainRange={[currentMinVolume, currentMaxVolume]}/>
        </div>
        <div style = {overlap}>
          <LineChart margin={{top: 10, right: 10, bottom: 50, left: 75}} data={this.getCurrentPointDoublePrime(this.props.length,this.props.width,this.props.x,this.props.showSecondDerivitive)} width={this.state.windowWidth} height={this.state.windowHeight} dataPoints xDomainRange={[0, this.maxCutout(this.props.length, this.props.width)]} yDomainRange={[currentMinVolume, currentMaxVolume]}/>
        </div>
      </div>
    )
  }
}
export default Graph;

const overlap = {
  position: 'absolute',
  marginLeft: '1%'
}

const onTop = {
  marginLeft: '1%'
}

