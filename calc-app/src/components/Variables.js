import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function Variables() {
  return (
    <div style={rowStyle}>
        <div style = {col}>
            <h3 >Sheet Dimensions</h3>
            <div style = {rowStyle}>
                <h4 style = {labelStyle}>X:</h4>
                <Slider style = {sliderStyle} min = {0} max = {100}/>
            </div>
            <div style = {rowStyle}>
                <h4 style = {labelStyle}>Y:</h4>
                <Slider style = {sliderStyle} min = {0} max = {100}/>
            </div>
        </div>

        <hr style={lineStyle}/>

        <div style = {col}>
            <h3>Cutout Dimensions</h3>
            <div style = {rowStyle}>
                <h4 style = {labelStyle}>X:</h4>
                <Slider style = {sliderStyle} min = {0} max = {100}/>
            </div>
        </div>
    </div>
  )
}

const col = {
    textAlign: 'center',
    width: '50%',
    marginTop: '20px',
    borderRadius: '4',
    borderWidth: '0.5',
    borderColor: '#d6d7da'
  }

const rowStyle = {
    display: 'flex',
    flexDirection: 'row'
  }

const lineStyle = {
    borderLeftWidth: 1,
    marginTop: '20px',
    marginBottom: '5px',
    borderLeftColor: '#333'
}

const sliderStyle = {
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '20px',
    width: '50%'
}

const labelStyle = {
    marginLeft: '20px',
    marginTop: '16px',
    marginBottom: '20px',
}
