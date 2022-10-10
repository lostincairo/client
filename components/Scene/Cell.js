import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRow, selectCol, highlightRow, highlightCol, movePlayer } from "../../redux/sceneSlice";
import { positionCol, positionRow, direction } from "../../redux/starknetSlice";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useStarknetInvoke } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";

const Cell = ({ cellPosition, cell, key, cellIndex, rowIndex }) => {

  const { highlightedRow } = useSelector((store) => store._scene);
  const { highlightedCol } = useSelector((store) => store._scene);
  const { selectedRow } = useSelector((store) => store._scene);
  const { selectedCol } = useSelector((store) => store._scene);
  const { playerRow } = useSelector((store) => store._starknet);
  const { playerCol } = useSelector((store) => store._starknet);
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
      onPointerEnter={(e) => [dispatch(highlightRow(rowIndex)), dispatch(highlightCol(cellIndex))]}
      onClick={(e) => {
        if ((cellIndex === selectedCol && rowIndex === selectedRow) && (playerCol !== cellIndex && playerRow !== rowIndex)) {
          // TODO: verify if needed to set the player coordinates at this moment.
          // dispatch(positionCol(cellIndex));
          // dispatch(positionRow(rowIndex));
          dispatch(selectCol(null));
          dispatch(selectRow(null));
        }
        if (cellIndex !== selectedCol || rowIndex !== selectedRow) {
          dispatch(selectCol(cellIndex));
          dispatch(selectRow(rowIndex));
        } else {
          dispatch(selectCol(null));
          dispatch(selectRow(null));
          console.log("move invalid, please try again");
        }
      }}
    >
      <meshStandardMaterial
        roughness={0.2}
        metalness={0.6}
        map={rockMap}
        color={
          (selectedRow == cellPosition.x && selectedCol == cellPosition.y)
            ? "red"
            : (highlightedCol === cellIndex && highlightedRow === rowIndex)
            ? "blue"
            : color
        }
      />
      <boxGeometry />
    </mesh>
  );
};

export default Cell;
