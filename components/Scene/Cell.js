import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRow,
  selectCol,
  highlightRow,
  highlightCol,
  movePlayer,
} from "../../redux/sceneSlice";
import { action, positionCol, positionRow, direction, SNhighlightRow, SNhighlightCol, setOpponentRow, setOpponentCol } from "../../redux/starknetSlice";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useStarknetInvoke, useAccount, useStarknetCall } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";
import Actions from '/components/UI/Actions';


// TODO: Create a function with rules for highlighting the right cells

const Cell = ({ cellPosition, cell, key, cellIndex, rowIndex }) => {
  const { highlightedRow, highlightedCol, selectedRow, selectedCol } =
    useSelector((store) => store._scene);
  const {  gameIdx, opponent_address, opponentRow, opponentCol, selectedAction, playerRow, playerCol, highlightActionRow, highlightActionCol } = useSelector((store) => store._starknet);

  const dispatch = useDispatch();

  const color = "white";
  const sandMap = useLoader(TextureLoader, "tile_front.png");
  const rockMap = useLoader(TextureLoader, "test_tile.svg");
  const colorMap =
    (cellPosition.x + cellPosition.y) % 2 === 0 ? sandMap : rockMap;

  const { contract: game } = useGameContract();
  const { data, loading, invoke } = useStarknetInvoke({
    contract: game,
    method: "move",
  });

  const call_move = (x, y) => {
    invoke({
      args: [gameIdx, opponent_address, x, y],
    });
  };

//////////////////////////////////

    function CallOpponentX(GAME_IDX, OPPONENT) {


      const { address } = useAccount();
      const { contract: game } = useGameContract();
      const { data, loading, error, refresh } = useStarknetCall({
        contract: game,
        method: "x_position_per_player_read",
        args: [GAME_IDX, OPPONENT],
        options: {
          watch: true,
        },
      });
    
      return { data, loading, error, refresh };
    }

   function CallOpponentY(GAME_IDX, OPPONENT) {
    
      const { address } = useAccount();
      const { contract: game } = useGameContract();
      const { data, loading, error, refresh } = useStarknetCall({
        contract: game,
        method: "y_position_per_player_read",
        args: [GAME_IDX, OPPONENT],
        options: {
          watch: true,
        },
      });
    
      return { data, loading, error, refresh };
    }
  
    const {
      data: opponent_x,
    } = CallOpponentX(gameIdx, opponent_address);
  
  const OPPONENT_X = opponent_x ? opponent_x.x.words[0] : [];
  // console.log(OPPONENT_X);
  // dispatch(setOpponentRow(OPPONENT_X));
  
    const {
      data: opponent_y,
    } = CallOpponentY(gameIdx, opponent_address);
  
  const OPPONENT_Y = opponent_y ? opponent_y.y.words[0] : [];
  
  // dispatch(setOpponentCol(OPPONENT_Y));
  


    // const opponent_row = CallOpponentX(gameIdx, opponent_address)
    // const opponent_col = CallOpponentY(gameIdx, opponent_address)




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
          dispatch(SNhighlightRow(null));
          dispatch(SNhighlightCol(null));
          dispatch(setOpponentRow())
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
        roughness={0.5}
        metalness={0.4}
        map={rockMap}
        color={
          // TODO: Abstract the logic from the color selection
          // Do not watch this plz 
          selectedRow == cellPosition.x && selectedCol == cellPosition.y
            ? "#AEE5A5"
            : highlightedCol === cellIndex && highlightedRow === rowIndex
            ? "#FFC5C9"
            : selectedAction === "bow" && highlightActionRow === rowIndex 
            ? "#DBEDFF"
            : selectedAction === "bow" && highlightActionCol === cellIndex 
            ? "#DBEDFF"
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex - 0
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex - 1 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex - 2 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex - 3 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex + 1 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex + 2 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex && highlightActionCol === cellIndex + 3 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex - 0
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex - 1 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex - 2 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex - 3 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex + 1 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex + 2 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 1 && highlightActionCol === cellIndex + 3 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex - 0
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex - 1
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex - 2
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex - 3
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex + 1
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex + 2
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 2 && highlightActionCol === cellIndex + 3
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex - 0
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex - 1
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex - 2
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex - 3
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex + 1
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex + 2
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex - 3 && highlightActionCol === cellIndex + 3
            ? "#DEFFE8"  
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex - 0
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex - 1 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex - 2 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex - 3 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex + 1 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex + 2 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 1 && highlightActionCol === cellIndex + 3 
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex - 0
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex - 1
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex - 2
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex - 3
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex + 1
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex + 2
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 2 && highlightActionCol === cellIndex + 3
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex - 0
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex - 1
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex - 2
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex - 3
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex + 1
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex + 2
            ? "#DEFFE8" 
            : selectedAction === "move" && highlightActionRow === rowIndex + 3 && highlightActionCol === cellIndex + 3
            ? "#DEFFE8"  
            : color
        }
      />
      <boxGeometry />
    </mesh>
  );
};

export default Cell;
