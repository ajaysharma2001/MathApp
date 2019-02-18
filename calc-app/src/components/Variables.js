//import React from 'react'
import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';


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
          cutoutData: '',
          sheetXData: '',
          sheetYData: '',
      };
  }

  handleCutout(event) {
      this.setState({cutoutData: event.target.value.substr(0,2)});
  }

  handleSheetX(event) {
      this.setState({sheetXData: event.target.value.substr(0,3)});
  }

  handleSheetY(event) {
      this.setState({sheetYData: event.target.value.substr(0,3)});
  }
  
  render() {
    return (
        <div style={rowStyle}>
            <div style = {col}>
                <h3 >Sheet Dimensions</h3>
                <div style = {rowStyle}>
                    <h4 style = {labelStyle}>L:</h4>
                    <Slider style = {sliderStyle} min = {0} max = {100} handle={handle}/>
                        <div style = {inputStyle}>
                            <input type="number" value={this.state.sheetXData} onChange={this.handleSheetX.bind(this)} />
                        </div>
                </div>
                <div style = {rowStyle}>
                    <h4 style = {labelStyle}>W:</h4>
                    <Slider style = {sliderStyle} min = {0} max = {100} handle ={handle}/>
                        <div style = {inputStyle}>
                            <input type="number" value={this.state.sheetYData} onChange={this.handleSheetY.bind(this)} />
                        </div>
                </div>
            </div>
            <hr style={lineStyle}/>
            <div style = {col}>
                <h3>Cutout Dimensions</h3>
                <div style = {rowStyle}>
                    <h4 style = {labelStyle}>X:</h4>
                    <Slider style = {sliderStyle} min = {0} max = {100} handle ={handle}/>
                        <div style = {inputStyle}>
                            <input type="number" value={this.state.cutoutData} onChange={this.handleCutout.bind(this)} />
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
