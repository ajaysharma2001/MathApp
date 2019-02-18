//import React from 'react'
import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import { send } from 'q';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};


class Variables extends Component {
  constructor() {
      super();
      this.state = {
          cutoutData: 3,
          sheetLData: 60,
          sheetWData: 30,
      };
  }
  handleCutout = (e) => {
    this.setState({cutoutData: parseInt(e.target.value, 10)});
  }
  handleSheetL = (e) => {
    this.setState({sheetLData: parseInt(e.target.value, 10)});
  }
  handleSheetW = (e) => {
    this.setState({sheetWData: parseInt(e.target.value, 10)});
  }

  onSliderChangeL = (value) => {
    this.setState({sheetLData: value});
    this.props.changeLength();
  }

  onSliderChangeW = (value) => {
      this.setState({sheetWData: value});
      this.props.changeWidth();
  }

  onSliderChangeCutout = (value) => {
    this.setState({cutoutData: value});
    this.props.changeCutout();
  }

  render() {
    return (
        <div style={rowStyle}>
            <div style = {col}>
                <h3 >Sheet Dimensions</h3>
                <div style = {rowStyle}>
                    <h4 style = {labelStyle}>L:</h4>
                    <Slider style = {sliderStyle} min = {0} max = {100} handle={handle} value={this.state.sheetLData} onChange={value=> this.onSliderChangeL(value)}/>
                        <div style = {inputStyle}>
                            <input type="number" value={this.state.sheetLData} onChange={(e) => this.handleSheetL(e)} />
                        </div>
                </div>
                <div style = {rowStyle}>
                    <h4 style = {labelStyle}>W:</h4>
                    <Slider style = {sliderStyle} min = {0} max = {100} handle ={handle} value={this.state.sheetWData} onChange={value=> this.onSliderChangeW(value)}/>
                        <div style = {inputStyle}>
                            <input type="number" value={this.state.sheetWData} onChange={(e) => this.handleSheetW(e)} />
                        </div>
                </div>
            </div>
            <hr style={lineStyle}/>
            <div style = {col}>
                <h3>Cutout Dimensions</h3>
                <div style = {rowStyle}>
                    <h4 style = {labelStyle}>X:</h4>
                    <Slider style = {sliderStyle} min = {0} max = {100} handle ={handle} value={this.state.cutoutData} onChange={value=> this.OnSliderChangeCutout(value)}/>
                        <div style = {inputStyle}>
                            <input type="number" value={this.state.cutoutData} onChange={(e) => this.handleCutout(e)} />
                        </div>
                </div>
            </div>
        </div>
      );
  }
  
}

export default Variables;


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

const inputStyle = {
    marginLeft: '10px',
    marginTop: '16px',
    marginBottom: '20px',
    
}
