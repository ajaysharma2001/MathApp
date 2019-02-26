import React, { Component } from 'react';
import * as THREE from 'three';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Line } from 'react-konva';
import Konva from 'konva';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Variables from './Variables'

class Prism extends Component{

render() {
  return(
    <p style = {col}>
        <Stage width={window.innerWidth/2} height={window.innerHeight/2}>
        <Layer>
          <Rect
            x={window.innerWidth/12}
            y={window.innerHeight/12}
            width={this.props.BigRedRectangleWidth- 2*this.props.SliderValueforCorner}
            height={this.props.BigRedRectangleHeight- 2*this.props.SliderValueforCorner}
            fill="Red"
            shadowBlur={0}

          />
        </Layer>
    <Layer>
      <Rect
        x={window.innerWidth/12+(0.70710*this.props.SliderValueforCorner)}
        y={window.innerHeight/12+(0.70710*this.props.SliderValueforCorner)}
        width={this.props.BigRedRectangleHeight- 2*this.props.SliderValueforCorner}
        height={this.props.BigRedRectangleWidth- 2*this.props.SliderValueforCorner}
        fill="Green"
        shadowBlur={0}
      />
    </Layer>
    <Layer>
      <Line
        points={[73, 70, 340, 23, 450, 60, 500, 20]}
        fill="Black"
      />
    </Layer>
    </Stage>
    </p>
        );
      }
}
export default Prism;
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

/*
class ThreeScene extends Component{
  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 4
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    //ADD CUBE
    var geometry = new THREE.BoxGeometry(this.props.BigRedRectangleWidth/100,this.props.BigRedRectangleWidth/100,this.props.BigRedRectangleWidth/100)
    var material = new THREE.MeshBasicMaterial({ color: '#433F81'     })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)

    //ADD controls
this.start()
  }
componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
stop = () => {
    cancelAnimationFrame(this.frameId)
  }
animate = () => {
   this.cube.rotation.x += 0.01
   this.cube.rotation.y += 0.01
   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
 }
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    return(
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default ThreeScene
/}
*/
