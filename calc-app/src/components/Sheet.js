import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Variables from './Variables'
import React, { Component } from 'react';



class Sheet extends Component{
  constructor(){
    super();
    this.state = {
      BigRedRectangleWidth: 100,
      BigRedRectangleHeight: 100,
      SliderValueforCorner: 30,
  };
}

render() {
  return(
    <p style = {col}>
        <Stage width={window.innerWidth/3} height={window.innerHeight/3}>
        <Layer>
          <Rect
            x={window.innerWidth/12}
            y={window.innerHeight/12}
            width={this.state.BigRedRectangleWidth}
            height={this.state.BigRedRectangleHeight}
            fill="Red"
            shadowBlur={0}
          />
        </Layer>
    <Layer>
      <Rect
        x={window.innerWidth/12}
        y={window.innerHeight/12}
        width={this.state.SliderValueforCorner}
        height={this.state.SliderValueforCorner}
        fill="Black"
        shadowBlur={0}
      />
    </Layer>
    <Layer>
      <Rect
        x={window.innerWidth/12 + (this.state.BigRedRectangleWidth-this.state.SliderValueforCorner)}
        y={window.innerHeight/12}
        width={this.state.SliderValueforCorner}
        height={this.state.SliderValueforCorner}
        fill="Black"
        shadowBlur={0}
      />
    </Layer>
    <Layer>
      <Rect
        x={window.innerWidth/12 + (this.state.BigRedRectangleWidth-this.state.SliderValueforCorner)}
        y={window.innerHeight/12+ (this.state.BigRedRectangleHeight-this.state.SliderValueforCorner)}
        width={this.state.SliderValueforCorner}
        height={this.state.SliderValueforCorner}
        fill="Black"
        shadowBlur={0}
      />
    </Layer>
    <Layer>
      <Rect
        x={window.innerWidth/12}
        y={window.innerHeight/12+ (this.state.BigRedRectangleHeight-this.state.SliderValueforCorner)}
        width={this.state.SliderValueforCorner}
        height={this.state.SliderValueforCorner}
        fill="Black"
        shadowBlur={0}
      />
    </Layer>
    </Stage>
    </p>
        );
      }
}
export default Sheet;




  const Stages = {
      alignSelf:'center',
  }
  const col = {
      textAlign: 'center',
      width: '50%',
      marginTop: '20px',
      borderRadius: '4',
      borderWidth: '0.5',
      borderColor: '#d6d7da',
      marginBottom: '100px'
    }
