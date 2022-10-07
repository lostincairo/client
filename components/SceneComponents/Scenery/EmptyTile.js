import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  selectCell,  highlightCell,  movePlayer} from "../../redux/sceneSlice";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const EmptyTile = ({ position, cell, key }) => {

  const color = "white";
  const { highlightedCell } = useSelector((store) => store._scene);
  const { selectedCell } = useSelector((store) => store._scene);
  const { playerPosition } = useSelector((store) => store._scene);
  const dispatch = useDispatch();

  const sandMap = useLoader(TextureLoader, "sand.png");
  const rockMap = useLoader(TextureLoader, "brick.png");
  const colorMap = (position.x + position.y) % 2 === 0 ? sandMap : rockMap;

  return (
    <mesh
      scale={[1, 1, 0.1]}
      rotation={[Math.PI / -2, 0, 0]}
      position={[position.x, 0, position.y]}
      onPointerEnter={(e) =>  dispatch(highlightCell(cell))}
      onClick={(e) => {
        if (cell === selectedCell && playerPosition !== cell) {
          dispatch(movePlayer(cell));
          dispatch(selectCell(null));
        } else if (cell !== selectedCell) {
          dispatch(selectCell(cell));
        } else {
          dispatch(selectCell(null));
          console.log("move invalid, please try again");
        }}}
    >
      <meshStandardMaterial
        roughness={0.2}
        metalness={0.6}
        map={sandMap}
        }
      />
      <boxGeometry />
    </mesh>
  );
};

export default EmptyTile;;