import {LineChart} from 'react-easy-chart';
import React, { Component } from 'react';


var graphData


function getCurrentPoint(length, width, x) {
  var point = LineChart.data = { x: x, y:(length - 2*x) *(width - 2 *x) *x };
  var arr = [point];
  return [arr];
}

var currentMaxVolume = 5195.987999999999;

class Graph extends Component {

  getData = (min, max, step, length, width) => {
    var dataArray = []
    currentMaxVolume = 0;
    for(var i = min; i < max; i += step) {
      var point = LineChart.data = { x: i, y:(length - 2*i) *(width - 2 *i) *i };
      if(point.y > currentMaxVolume) {
        currentMaxVolume = point.y
      }
      dataArray.push(point);
    }
    graphData = [dataArray];
    return [dataArray];
  }

  maxCutout(length, width) {
    if(length > width) {
      return width/2;
    }
    else {
      return length /2;
    }
  }

  render() {
    return (
      <div>
        <div style = {overlap}>
          <LineChart margin={{top: 10, right: 10, bottom: 50, left: 100}} style={{ '.label': { fill: 'black' } }} data={this.getData(0, this.maxCutout(this.props.length, this.props.width), 0.1, this.props.length, this.props.width)} axes grid verticalGrid axisLabels={{x: 'Cutout Size', y: 'Volume'}} width={400} height={400} interpolate={'cardinal'}/>
        </div>
        <div style = {overlap}>
          <LineChart margin={{top: 10, right: 10, bottom: 50, left: 100}} axes style={{ '.label': { fill: 'black' } }} data={getCurrentPoint(this.props.length,this.props.width,this.props.x)} width={400} height={400} dataPoints xDomainRange={[0, this.maxCutout(this.props.length, this.props.width)]} yDomainRange={[0, currentMaxVolume]}/>
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