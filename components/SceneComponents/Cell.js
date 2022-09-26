import React from "react";
import { number } from "starknet";
import { useDispatch, useSelector } from "react-redux";
import { selectCell, highlightCell } from "../../game/scenes/sceneSlice"

const Cell = ({position, cell}) => {

    const dispatch = useDispatch(); 
    const color = ((position.x + position.y) % 2 ===0 ? "black" : "white")

    return (
        <mesh
        //   onClick={() => onCellSelect(cell)}
          scale={[1, 1, 0.1]}
          rotation={[Math.PI / -2, 0, 0]}
          position={[position.x, 0, position.y]}
          onClick={(e) => dispatch(selectCell(cell))}
          onPointerDown={(e) => dispatch(highlightCell(cell))}
        >
          <meshStandardMaterial roughness={0.4} metalness={0.2} color={color} />
          <boxGeometry />
        </mesh>
    );
}
``
export default Cell;