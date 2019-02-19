import {LineChart} from 'react-easy-chart';
import React, { Component } from 'react';

var maxVolume = 0;

function getData(min, max, step, length, width) {
  var dataArray = []

  for(var i = min; i < max; i += step) {
    var point = LineChart.data = { x: i, y:(length - 2*i) *(width - 2 *i) *i };
    if(point.y > maxVolume) {
      maxVolume = point.y
    }
    dataArray.push(point);
  }
  return [dataArray];
}

function getCurrentPoint(length, width, x) {
  var point = LineChart.data = { x: x, y:(length - 2*x) *(width - 2 *x) *x };
  var arr = [point];
  return [arr];
}


class Graph extends Component {

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
          <LineChart margin={{top: 10, right: 10, bottom: 50, left: 100}} style={{ '.label': { fill: 'black' } }} data={getData(0, 15, 0.1, this.props.length, this.props.width)} axes grid verticalGrid axisLabels={{x: 'Cutout Size', y: 'Volume'}} width={400} height={400} interpolate={'cardinal'}/>
        </div>
        <div style = {overlap}>
          <LineChart margin={{top: 10, right: 10, bottom: 50, left: 100}} style={{ '.label': { fill: 'black' } }} data={getCurrentPoint(this.props.length,this.props.width,this.props.x)} width={400} height={400} dataPoints xDomainRange={[0, this.maxCutout(this.props.length, this.props.width)]} yDomainRange={[0, maxVolume]}/>
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