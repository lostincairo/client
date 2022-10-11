import React, {useRef, useEffect} from "react";
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
  const { playerRow, playerCol, direction } = useSelector((store) => store._starknet);

  // Texture setup
  const playerMapUL = useLoader(TextureLoader, "sprite_walk_up_left.svg ");
  const playerMapUR = useLoader(TextureLoader, "sprite_walk_up_right.svg ");
  const playerMapDL = useLoader(TextureLoader, "sprite_walk_down_left.svg ");
  const playerMapDR = useLoader(TextureLoader, "sprite_walk_down_right.svg ");

  var playerMap = playerMapUL;

  if (playerRow < 7) {
    playerMap = playerMapUL
  } else if (playerRow >= 7){
    playerMap = playerMapDR
  }


  playerMap.magFilter = THREE.NearestFilter
  playerMap.encoding = THREE.LinearEncoding
  playerMap.offset.x = 0;
  playerMap.offset.y = 0;
  playerMap.repeat.set(1/8,1)



  // Counters for sprite animation
  // TODO: Add logic for capping the animation speed for different monitor refresh rates
  const timeElapsed = 0;
  const counter = 0;

  const ref = useRef()
  // Sprite Animation
  // TODO: Add transition for movement from one cell to another
  useFrame(({ clock }, delta) => {
    timeElapsed += delta;
    counter += delta;

    // console.log(timeElapsed);
    if (timeElapsed > 2) {
      // playerMap.offset.x = 4/8;
      
      timeElapsed = 0;
      counter = 0;
    } else if (counter > 0.5) {

      // playerMap.offset.x = 4 / 8;

      
      counter = 0;
    }
  });


  // if( movePlayer === cell) {
  return (
    <sprite
      ref={ref}
      scale={[1, 2, 1]}
      position={[playerRow, 1, playerCol]}
      rotation={[1, 1, 1]}
    >
     <spriteMaterial transparent map={playerMap} />
    </sprite> 
  );

};

export default Player;
