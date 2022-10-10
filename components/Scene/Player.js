import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import { selectRow, selectCol, highlightRow, highlightCol, movePlayer } from "/redux/sceneSlice";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";


const Player = () => {
  // Store initialisation
  const dispatch = useDispatch();
  const { highlightedCell } = useSelector((store) => store._scene);
  const { selectedCell } = useSelector((store) => store._scene);
  const { movePlayer } = useSelector((store) => store._scene);

  // Texture setup
  const playerMap = useLoader(TextureLoader, "sprite_walk_up_left.svg ");

  playerMap.magFilter = THREE.NearestFilter
  playerMap.offset.x = 1/8;
  playerMap.offset.y = 0;
  playerMap.repeat.set(1/8,1)

  // Counters for sprite animation
  // TODO: Add logic for capping the animation speed for different monitor refresh rates
  const timeElapsed = 0;
  const counter = 0;

  const row = 1;
  const rowIndex = 1;

  const spritePosition = {
    x: 1,
    y: 1
  }


  // Sprite Animation
  // TODO: Add transition for movement from one cell to another
  useFrame(({ clock }, delta) => {
    timeElapsed += delta;
    counter += delta;
    // console.log(timeElapsed);
    if (timeElapsed > 4) {
      playerMap.offset.x = 0;
      
      timeElapsed = 0;
    } else if (counter > 0.4) {
      playerMap.offset.x += 1 / 8;
      spritePosition.y += 1;
      counter = 0;
    }
  });


  // if( movePlayer === cell) {
  return (
    <sprite
      scale={[1, 1, 1]}
      position={[spritePosition.x, 0.6, spritePosition.y]}
      rotation={[2, 1.5, 1]}
    >
      <spriteMaterial transparent map={playerMap} />
    </sprite>
  );

};

export default Player;
