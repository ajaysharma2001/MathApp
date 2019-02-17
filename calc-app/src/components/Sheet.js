import React from 'react'
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

export default function Sheet() {
  return (
<p style={Stages}>
    <Stage width={window.innerWidth/3} height={window.innerWidth/3}>

<Layer>
  <Rect
    x={window.innerWidth/9}
    y={50}
    width={100}
    height={100}
    fill="Black"
    shadowBlur={0}
  />
</Layer>
<Layer>
  <Rect
    x={85}
    y={50}
    width={10}
    height={10}
    fill="White"
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
