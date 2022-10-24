import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selected_x, selected_y } from "../../redux/sceneSlice";
import { action, positionCol, positionRow, direction, SNhighlightRow, SNhighlightCol, setOpponentRow, setOpponentCol } from "../../redux/starknetSlice";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Actions from '/components/UI/Actions';


const red = "#AEE5A5";
const blue = "#DEFFE8"; 
const yellow = "#FFC5C9";

// TODO: Clean this function
const clickOnCell = () => {
    if (
      cellIndex === selectedCol &&
      rowIndex === selectedRow &&
      playerCol !== cellIndex &&
      playerRow !== rowIndex
    ) {

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
};




// TODO: Create a function with rules for highlighting the right cells

const Cell = ({ cellPosition, cellIndex, rowIndex }) => {

  const { highlightedRow, highlightedCol, selectedRow, selectedCol } = useSelector((store) => store._scene);
  const {  gameIdx, opponent_address, opponentRow, opponentCol, selectedAction, playerRow, playerCol, highlightActionRow, highlightActionCol } = useSelector((store) => store._starknet);
  const dispatch = useDispatch();

  const color = "white";
  const rockMap = useLoader(TextureLoader, "tile_base.svg");


  return (
    <mesh
      scale={[1, 1, 0.1]}
      rotation={[Math.PI / -2, 0, 0]}
      position={[cellPosition.x, 0, cellPosition.y]}
      onPointerEnter={(e) => [
        dispatch(highlightRow(rowIndex)),
        dispatch(highlightCol(cellIndex)),
      ]}
      // onClick={clickOnCell}
    >

      <meshStandardMaterial
        roughness={0.5}
        metalness={0.4}
        map={rockMap}
        color={color}
      />
      <boxGeometry />
    </mesh>
  );
};

export default Cell;
