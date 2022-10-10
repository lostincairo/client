import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRow,
  selectCol,
  highlightRow,
  highlightCol,
  movePlayer,
} from "../../redux/sceneSlice";
import { action, positionCol, positionRow, direction, SNhighlightRow, SNhighlightCol } from "../../redux/starknetSlice";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useStarknetInvoke } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";
import Actions from '/components/UI/Actions';


// TODO: Create a function with rules for highlighting the right cells

const Cell = ({ cellPosition, cell, key, cellIndex, rowIndex }) => {
  const { highlightedRow, highlightedCol, selectedRow, selectedCol } =
    useSelector((store) => store._scene);
  const { selectedAction, playerRow, playerCol, highlightActionRow, highlightActionCol } = useSelector((store) => store._starknet);

  const dispatch = useDispatch();

  const color = "white";
  const sandMap = useLoader(TextureLoader, "sand.png");
  const rockMap = useLoader(TextureLoader, "brick.png");
  const colorMap =
    (cellPosition.x + cellPosition.y) % 2 === 0 ? sandMap : rockMap;

  const { contract: game } = useGameContract();
  const { data, loading, invoke } = useStarknetInvoke({
    contract: game,
    method: "move",
  });

  const call_move = (x, y) => {
    invoke({
      args: [1, 0x1, x, y],
    });
  };

  // TODO: need 2 different logic to invoke the function both on initiation and during the game. 2 different contract function so 2 dispatches
  return (
    <mesh
      scale={[1, 1, 0.1]}
      rotation={[Math.PI / -2, 0, 0]}
      position={[cellPosition.x, 0, cellPosition.y]}
      onPointerEnter={(e) => [
        dispatch(highlightRow(rowIndex)),
        dispatch(highlightCol(cellIndex)),
      ]}
      onClick={(e) => {
        if (
          cellIndex === selectedCol &&
          rowIndex === selectedRow &&
          playerCol !== cellIndex &&
          playerRow !== rowIndex
        ) {
          // TODO: verify if needed to set the player coordinates at this moment.
          // dispatch(positionCol(cellIndex));
          // dispatch(positionRow(rowIndex));
          dispatch(selectCol(null));
          dispatch(selectRow(null));
          dispatch(SNhighlightRow(null))
          dispatch(SNhighlightCol(null))
        } else if (cellIndex !== selectedCol || rowIndex !== selectedRow) {
          dispatch(selectCol(cellIndex));
          dispatch(selectRow(rowIndex));
          dispatch(SNhighlightRow(null))
          dispatch(SNhighlightCol(null))
          // TODO: See why you need a double click to make it work
        } else if (playerCol === cellIndex && playerRow === rowIndex && selectedCol === cellIndex && selectedRow === rowIndex) {
          console.log('move')
          dispatch(action("move"))
          dispatch(SNhighlightCol(cellIndex))
          dispatch(SNhighlightRow(rowIndex))
        } else if (selectedAction === "move"){ 
          call_move(rowIndex, cellIndex)
        } else if (selectedAction === "bow"){ 
          Actions(call_action(rowIndex, cellIndex))
        } else {
          dispatch(selectCol(null));
          dispatch(selectRow(null));
          dispatch(SNhighlightRow(null))
          dispatch(SNhighlightCol(null))
          console.log("move invalid, please try again");
        }
      }}
    >

      <meshStandardMaterial
        roughness={0.2}
        metalness={0.6}
        map={rockMap}
        color={
          // TODO: Abstract the logic from the color selection
          // Do not watch this plz 
          selectedRow == cellPosition.x && selectedCol == cellPosition.y
            ? "red"
            : highlightedCol === cellIndex && highlightedRow === rowIndex
            ? "blue"
            : selectedAction === "bow" && highlightActionRow === rowIndex 
            ? "green"
            : selectedAction === "bow" && highlightActionCol === cellIndex 
            ? "green"
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex - 0
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex - 1 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex - 2 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex - 3 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex + 1 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex + 2 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex + 3 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex - 0
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex - 1 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex - 2 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex - 3 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex + 1 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex + 2 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex + 3 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex - 0
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex - 1
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex - 2
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex - 3
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex + 1
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex + 2
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex + 3
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex - 0
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex - 1
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex - 2
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex - 3
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex + 1
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex + 2
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex + 3
            ? "yellow"  
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex - 0
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex - 1 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex - 2 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex - 3 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex + 1 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex + 2 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex + 3 
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex - 0
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex - 1
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex - 2
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex - 3
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex + 1
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex + 2
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex + 3
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex - 0
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex - 1
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex - 2
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex - 3
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex + 1
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex + 2
            ? "yellow" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex + 3
            ? "yellow"  
            : color
        }
      />
      <boxGeometry />
    </mesh>
  );
};

export default Cell;
