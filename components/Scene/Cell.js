import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedX, setSelectedY, setHighlightedX, setHighlightedY } from "../../redux/sceneSlice";
import { action, positionCol, positionRow, direction, SNhighlightRow, SNhighlightCol, setOpponentRow, setOpponentCol } from "../../redux/starknetSlice";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Actions from '/components/UI/Actions';

const darkgreen = "#AEE5A5";
const lightgreen = "#DEFFE8"; 
const red = "#FFC5C9";


const colorCell = (x, y) => {
  const { selected_x, selected_y, highlighted_x, highlighted_y } = useSelector((store) => store._scene);

  if( selected_x === x && selected_y === y ) {
    return red;
  } else if ( highlighted_x === x && highlighted_y === y ) {
    return lightgreen;
  }
  return "white"
}



const Cell = ({ position}) => {

  const dispatch = useDispatch();
  const color = colorCell(position.x, position.y);
  const rockMap = useLoader(TextureLoader, "tile_base.svg");


  return (
    <mesh
      scale={[1, 1, 0.1]}
      rotation={[Math.PI / -2, 0, 0]}
      position={[position.x, 0, position.y]}
      onPointerEnter={(e) => [
        dispatch(setHighlightedX(position.x)),
        dispatch(setHighlightedY(position.y)),
      ]}
      onClick={() => {dispatch(setSelectedX(position.x)); dispatch(setSelectedY(position.y))}}
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
