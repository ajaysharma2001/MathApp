import {LineChart} from 'react-easy-chart';
import React from 'react'

getData: (min, max, step, x, length, width) => {
  var dataArray = []
}

export default function Header() {
  return (
    <div>
        <LineChart data={[
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ]
    ]}/>
    </div>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }