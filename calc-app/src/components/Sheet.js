import React from 'react'
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

export default function Sheet() {
  return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill= "red"
        shadowBlur={5}
      />
    );
  }
