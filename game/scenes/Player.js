import React from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const playerMap = useLoader(TextureLoader, "spritesheet_caveman.png");
  playerMap.repeat.set(1/4, 1/4);
  playerMap.offset.x = 0;
  playerMap.offset.y = 0;

  


  // Counters for sprite animation
  // TODO: Add logic for capping the animation speed for different monitor refresh rates
  const timeElapsed = 0;
  const counter = 0;


  // Sprite Animation 
  // TODO: Add transition for movement from one cell to another
  useFrame(({ clock }, delta) => {
    timeElapsed += delta;
    counter += delta;
    // console.log(timeElapsed);
    if (timeElapsed > 1) {
      playerMap.offset.x = 0;
      timeElapsed = 0;
    } else if (counter > 0.3) {
      playerMap.offset.x += 1 / 4;
      counter = 0;
    }
  });


  // Display the player on the grid cell.
  // WIP
  const displayPlayer = board.map((row, rowIndex) => (
      row.map((cell, cellIndex) => (
        <sprite scale={[1, 1, 0.1]} position={[rowIndex, 1, cellIndex]} rotation={[0,0.75,0]}>
        <spriteMaterial transparent map={playerMap}  />
         </sprite>))));
        
        // if( movePlayer === cell) {
            return displayPlayer;
        // }
        // } else {
        //     return;
        // }
        //   position={{ x: rowIndex, z: 0, y: cellIndex }}


};

export default CellPlayer;
