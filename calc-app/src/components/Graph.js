import {LineChart} from 'react-easy-chart';
import React from 'react'

function getData(min, max, step, x, length, width) {
  
  return LineChart.data = [
    [
      { x: 1, y: 20 },
      { x: 2, y: 10 },
      { x: 3, y: 25 }
    ], [
      { x: 1, y: 10 },
      { x: 2, y: 12 },
      { x: 3, y: 4 }
    ]
  ];
}


export default function Graph() {
  return (
    <div>
        <LineChart data={getData(0, 10, 1, 2, 30, 60)}/>
    </div>
  )
}