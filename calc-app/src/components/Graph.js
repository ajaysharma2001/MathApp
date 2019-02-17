import {LineChart} from 'react-easy-chart';
import React from 'react'

getData: (min, max, step, x, length, width) => {

}

export default function Header() {
  return (
    <div>
        <LineChart />
    </div>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }