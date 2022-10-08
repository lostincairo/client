import React, { useRef } from "react";
import Board from "./Board";
import Player from "./Player";
import * as THREE from 'three';
import _scene from "/redux/sceneSlice";
import { useDispatch, useSelector } from "react-redux";
import { Canvas, extend } from "@react-three/fiber";
import { Environment, OrbitControls, Lightformer } from "@react-three/drei";


const Combat = () => {
  // State management
  const dispatch = useDispatch();
  //   const { isHovered } = useSelector((store) => store._scene);
  const mesh = useRef();

  var aspect = window.innerWidth / window.innerHeight;
  var d = 20;
  const camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, 1, 1000 );
  
  camera.position.set( -20, 20, -20 ); // all components equal
  camera.lookAt( 0,0,0 ); // or the origin
  camera.zoom = 75


  return (
    <Canvas
      orthographic
      // camera={{
      //   position: [-10, 6, -10],
      //   left: 10,
      //   right: 10,
      //   top: 10,
      //   bottom: 10,
      //   zoom: 100,
      // }}
      camera={camera}
      gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
    >
      <color attach="background" args={['#f5efe6']} />
      <ambientLight color="white" intensity={0.8} />
      <group>
      <directionalLight color="#FFFFFF" position={[-12, 12, -6]} />
        <Board />
  
        {/* <mesh>
        <boxGeometry args={[3, 3, 3]} />
         <meshStandardMaterial color={"orange"} />
         </mesh> */}
      </group>
      <Player />
    </Canvas>
  );
};
export default Combat;
