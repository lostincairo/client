import React, { useRef } from "react";
import Board from "./Board";
import Player from "./Player";
import * as THREE from 'three';
import _scene from "/redux/sceneSlice";
import { Canvas, extend, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";



const Combat = () => {

  const mesh = useRef();

  // Camera setup
  var aspect = 2140 / 1500;
  var d = 15;
  const camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, 1, 1000 );
  camera.position.set( -15, 15, -15 ); // all components equal
  camera.lookAt( 9,0,9 ); // or the origin
  camera.zoom = 80


  return (
    <Canvas
    linear
      orthographic
      camera={camera}
      gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
    >
      <ambientLight color="white" intensity={1} />
      <group>
        <directionalLight color="#FFFFFF" position={[-12, 12, -6]} />
        <Board />
      </group>
      <Player />
    </Canvas>
  );
};
export default Combat;


function Background() {
  const {gl} = useThree();
  const texture = useLoader(TextureLoader, "scene.svg" )
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.magFilter = THREE.NearestFilter
  texture.minFilter = THREE.NearestFilter
  const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)

  return(
    <mesh rotation={[0, 0.8, 0]} scale={20}>
      <planeBufferGeometry />
      <meshBasicMaterial map={texture} depthTest={true} depthWrite={false} side={THREE.BackSide} />
    </mesh>
  )
};