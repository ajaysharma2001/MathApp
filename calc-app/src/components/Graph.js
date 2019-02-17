import {LineChart} from 'react-easy-chart';
import {ScatterplotChart} from 'react-easy-chart';
import React from 'react'

function getData(min, max, step, length, width) {
  var dataArray = []

  for(var i = min; i < max; i += step) {
    var point = LineChart.data = { x: i, y:(length - 2*i) *(width - 2 *i) *i };
    dataArray.push(point);
  }
  console.log(dataArray);
  return [dataArray];
}


export default function Graph() {
  return (
    <div>
      <LineChart data={getData(0, 30, 0.1, 30, 60)} axes grid verticalGrid margin={{top: 10, right: 10, bottom: 50, left: 50}} axisLabels={{x: 'My x Axis', y: 'My y Axis'}} width={400} height={400} interpolate={'cardinal'}/>
    </div>
  )
}