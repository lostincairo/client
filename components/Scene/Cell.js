import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCell, highlightCell, movePlayer } from "../../redux/sceneSlice";
import { position, direction } from "../../redux/starknetSlice";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useStarknetInvoke } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";

const Cell = ({ cellPosition, cell, key, cellIndex, rowIndex }) => {

  const { highlightedCell } = useSelector((store) => store._scene);
  const { selectedCell } = useSelector((store) => store._scene);
  const { position } = useSelector((store) => store._starknet);
  const dispatch = useDispatch();

  const color = "white";
  const sandMap = useLoader(TextureLoader, "sand.png");
  const rockMap = useLoader(TextureLoader, "brick.png");
  const colorMap = (cellPosition.x + cellPosition.y) % 2 === 0 ? sandMap : rockMap;

  const { contract: game } = useGameContract();
  const { data, loading, invoke } = useStarknetInvoke({
    contract: game,
    method: "move",
  });

  const call_move = (x, y) => {
    invoke({
      args: [x, y]
    });
  };


  // TODO: need 2 different logic to invoke the function both on initiation and during the game. 2 different contract function so 2 dispatches
  return (
    <mesh
      scale={[1, 1, 0.1]}
      rotation={[Math.PI / -2, 0, 0]}
      position={[cellPosition.x, 0, cellPosition.y]}
      onPointerEnter={(e) => [dispatch(highlightCell([cellIndex, rowIndex])),console.log(cellIndex, rowIndex)]}
      onClick={(e) => {
        if ((cellIndex === selectedCell[0] && rowIndex === selectedCell[1]) && (playerPosition[0] !== cellIndex && playerPosition[1] !== rowIndex)) {
          dispatch(position(cellIndex, rowIndex));
          dispatch(selectCell(null));
        } else if (cell !== selectedCell) {
          dispatch(selectCell(cellIndex, rowIndex));
        } else {
          dispatch(selectCell(null));
          console.log("move invalid, please try again");
        }
      }}
    >
      <meshStandardMaterial
        roughness={0.2}
        metalness={0.6}
        map={rockMap}
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

export default Cell;
