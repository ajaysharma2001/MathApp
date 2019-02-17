import React from 'react'
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

var BigRedRectangleWidth = 100;
var BigRedRectangleHeight = 100;
var SliderValueforCorner= 1;


export default function Sheet() {
  return (
<p style = {col}>
    <Stage width={window.innerWidth/3} height={window.innerHeight/3}>
    <Layer>
      <Rect
        x={window.innerWidth/12}
        y={window.innerHeight/12}
        width={BigRedRectangleWidth}
        height={BigRedRectangleHeight}
        fill="Red"
        shadowBlur={0}
      />
    </Layer>
<Layer>
  <Rect
    x={window.innerWidth/12}
    y={window.innerHeight/12}
    width={SliderValueforCorner}
    height={SliderValueforCorner}
    fill="Black"
    shadowBlur={0}
  />
</Layer>
<Layer>
  <Rect
    x={window.innerWidth/12 + (BigRedRectangleWidth-SliderValueforCorner)}
    y={window.innerHeight/12}
    width={SliderValueforCorner}
    height={SliderValueforCorner}
    fill="Black"
    shadowBlur={0}
  />
</Layer>
<Layer>
  <Rect
    x={window.innerWidth/12 + (BigRedRectangleWidth-SliderValueforCorner)}
    y={window.innerHeight/12+ (BigRedRectangleHeight-SliderValueforCorner)}
    width={SliderValueforCorner}
    height={SliderValueforCorner}
    fill="Black"
    shadowBlur={0}
  />
</Layer>
<Layer>
  <Rect
    x={window.innerWidth/12}
    y={window.innerHeight/12+ (BigRedRectangleHeight-SliderValueforCorner)}
    width={SliderValueforCorner}
    height={SliderValueforCorner}
    fill="Black"
    shadowBlur={0}
  />
</Layer>
</Stage>
</p>
    );
  }


  const Stages = {
      alignSelf:'center',
  }
  const col = {
      textAlign: 'center',
      width: '50%',
      marginTop: '20px',
      borderRadius: '4',
      borderWidth: '0.5',
      borderColor: '#d6d7da'
    }
