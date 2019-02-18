import {LineChart} from 'react-easy-chart';
import React from 'react'

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
  console.log(maxVolume);
  console.log(dataArray);
  return [dataArray];
}

function getCurrentPoint(length, width, x) {
  var point = LineChart.data = { x: x, y:(length - 2*x) *(width - 2 *x) *x };
  var arr = [point];
  return [arr];
}

export default function Graph() {
  return (
    <div>
      <div style = {overlap}>
        <LineChart margin={{top: 10, right: 10, bottom: 50, left: 100}} style={{ '.label': { fill: 'black' } }} data={getData(0, 15, 0.1, 30, 60)} axes grid verticalGrid axisLabels={{x: 'Cutout Size', y: 'Volume'}} width={400} height={400} interpolate={'cardinal'}/>
      </div>
      <div style = {overlap}>
        <LineChart margin={{top: 10, right: 10, bottom: 50, left: 100}} style={{ '.label': { fill: 'black' } }} data={getCurrentPoint(30,60,5)} width={400} height={400} dataPoints xDomainRange={[0, 15]} yDomainRange={[0, maxVolume]}/>
      </div>
    </div>
  )
}

const overlap = {
  position: 'absolute',
  marginLeft: '1%'
}

const onTop = {
  marginLeft: '1%'
}