import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import { selectCell, highlightCell, movePlayer } from "../../redux/sceneSlice";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { board } from "../../utils/sceneHelpers";

const CellPlayer = () => {
  // Store initialisation
  const dispatch = useDispatch();
  const { highlightedCell } = useSelector((store) => store._scene);
  const { selectedCell } = useSelector((store) => store._scene);
  const { movePlayer } = useSelector((store) => store._scene);

  // Texture setup
  const playerMap = useLoader(TextureLoader, "Sprite 3-4 left.png");

  playerMap.magFilter = THREE.NearestFilter
  playerMap.offset.x = 0;
  playerMap.offset.y = 0;

  // Counters for sprite animation
  // TODO: Add logic for capping the animation speed for different monitor refresh rates
  const timeElapsed = 0;
  const counter = 0;

  const row = 1;
  const rowIndex = 1;


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
      playerMap.offset.x += 1 / 9;
      row += 1
      counter = 0;
    }
  });


  // if( movePlayer === cell) {
  return (
    <sprite
      scale={[1, 1, 1]}
      position={[0, 3, 0]}
      rotation={[2, 1.5, 1]}
    >
      <spriteMaterial transparent map={playerMap} />
    </sprite>
  );

};

export default CellPlayer;
