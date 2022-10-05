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
  const playerMap = useLoader(TextureLoader, "walk_preview.png");
  playerMap.repeat.set(1 / 7, 1);
  playerMap.offset.x = 0;
  playerMap.offset.y = 0;

  // Counters for sprite animation
  // TODO: Add logic for capping the animation speed for different monitor refresh rates
  const timeElapsed = 0;
  const counter = 0;

  const row = 1;
  const rowIndex = 1;

  const a = new THREE.Vector2(1,3);

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
      playerMap.offset.x += 1 / 10;
      row += 1
      counter = 0;
    }
  });


  // if( movePlayer === cell) {
  return (
    <sprite
      scale={[3, 3, 0.1]}
      position={[row, 1, rowIndex]}
      rotation={[0, 0.75, 0]}
    >
      <spriteMaterial transparent map={playerMap} />
    </sprite>
  );

};

export default CellPlayer;
