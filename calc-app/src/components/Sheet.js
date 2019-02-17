import React from 'react'
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

export default function Sheet() {
  return (
<p style = {col}>
    <Stage width={window.innerWidth/3} height={window.innerHeight/3}>
    <Layer>
      <Rect
        x={window.innerWidth/12}
        y={window.innerHeight/12}
        width={200}
        height={100}
        fill="Red"
        shadowBlur={0}
      />
    </Layer>
<Layer>
  <Rect
    x={window.innerWidth/12}
    y={window.innerHeight/12}
    width={10}
    height={10}
    fill="Black"
    shadowBlur={0}
  />
</Layer>
<Layer>
  <Rect
    x={window.innerWidth/12 + 190}
    y={window.innerHeight/12}
    width={10}
    height={10}
    fill="Black"
    shadowBlur={0}
  />
</Layer>
<Layer>
  <Rect
    x={window.innerWidth/12 + 190}
    y={window.innerHeight/12+ 90}
    width={10}
    height={10}
    fill="Black"
    shadowBlur={0}
  />
</Layer>
<Layer>
  <Rect
    x={window.innerWidth/12}
    y={window.innerHeight/12+ 90}
    width={10}
    height={10}
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
