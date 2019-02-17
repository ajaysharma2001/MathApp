import React from 'react'

export default function VariablesTitle() {
  return (
      <div style={rowStyle}>
            <hr style={lineStyle} />
            <p style={textStyle}>Variables</p>
            <hr style={lineStyle} />
      </div>
  )
}

const lineStyle = {
    backgroundColor: '#333',
    height: 2,
    flex: 1,
    alignSelf: 'center'
}

const textStyle = {
    alignSelf:'center',
    paddingHorizontal:5,
    fontSize: 24
}

const rowStyle = {
    display: 'flex',
    flexDirection: 'row'
}
