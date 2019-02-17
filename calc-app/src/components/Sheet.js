import React from 'react'
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

export default function Sheet() {
  return (
    <Stage width={200} height={200}>
<Layer>
  <Rect
    x={20}
    y={50}
    width={100}
    height={100}
    fill="red"
    shadowBlur={10}
  />
</Layer>
</Stage>
    );
  }
