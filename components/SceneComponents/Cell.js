import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCell,
  highlightCell,
  movePlayer,
} from "../../game/scenes/sceneSlice";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Cell = ({ position, cell, key }) => {

  // const cellhighlight = useSelector((store) => store._scene);
  const color = "white";
  const { highlightedCell } = useSelector((store) => store._scene);
  const { selectedCell } = useSelector((store) => store._scene);
  const { playerPosition } = useSelector((store) => store._scene);
  const dispatch = useDispatch();
  
  const sandMap = useLoader(TextureLoader, "sand.png");
  const rockMap = useLoader(TextureLoader, "rock.png");
  const colorMap = (position.x + position.y) % 2 === 0 ? sandMap : rockMap;

  return (
    <mesh
      //   onClick={() => onCellSelect(cell)}
      scale={[1, 1, 0.1]}
      rotation={[Math.PI / -2, 0, 0]}
      position={[position.x, 0, position.y]}
      onClick={(e) => ConfirmMove(cell, selectedCell, playerPosition)}
      // onPointerEnter={(e) => dispatch(highlightCell(cell))}
    >
      <meshStandardMaterial
        roughness={0.2}
        metalness={0.6}
        map={colorMap}
        color={
          selectedCell === cell
            ? "red"
            : highlightedCell === cell
            ? "blue"
            : color
        }
      />
      <boxGeometry />
    </mesh>
  );
};

const ConfirmMove = (cell, selectedCell, playerPosition) => {


  if (cell === selectedCell && playerPosition !== cell) {
    dispatch(movePlayer(cell));
    dispatch(selectCell(null));
  } else if (cell !== selectedCell) {
    dispatch(selectCell(cell));
  } else {
    console.log("move invalid, please try again");
  }
  return;
};

export default Cell;
