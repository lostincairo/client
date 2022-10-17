import React, {useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import { selectRow, selectCol, highlightRow, highlightCol, movePlayer} from "/redux/sceneSlice";
import { setOpponentRow, setOpponentCol } from "/redux/starknetSlice";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  useTransactionManager,
  useTransaction,
  useAccount,
  useStarknetCall,
} from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";

const Opponent = () => {
  // Store initialisation
  const dispatch = useDispatch();
  const { highlightedCell } = useSelector((store) => store._scene);
  const { selectedCell } = useSelector((store) => store._scene);
  const { movePlayer } = useSelector((store) => store._scene);
  const { opponentRow, opponentCol, direction, opponent_address, gameIdx } = useSelector((store) => store._starknet);




  // Texture setup

  const playerMapDL = useLoader(TextureLoader, "opponent_down_left.svg ");
  const playerMapDR = useLoader(TextureLoader, "opponent_down_right.svg ");

  var playerMap = playerMapDL;

  if (opponentCol < 7) {
    playerMap = playerMapDL
  } else if (opponentCol >= 7){
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
      position={[opponentRow, 1, opponentCol]}
      rotation={[1, 1, 1]}
    >
     <spriteMaterial transparent map={playerMap} />
    </sprite> 
  );

};

export default Opponent;