import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCell, highlightCell, movePlayer } from "../../redux/sceneSlice";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useStarknetInvoke } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";

const Cell = ({ position, cell, key }) => {

  const { highlightedCell } = useSelector((store) => store._scene);
  const { selectedCell } = useSelector((store) => store._scene);
  const { playerPosition } = useSelector((store) => store._scene);
  const dispatch = useDispatch();

  const color = "white";
  const sandMap = useLoader(TextureLoader, "sand.png");
  const rockMap = useLoader(TextureLoader, "brick.png");
  const colorMap = (position.x + position.y) % 2 === 0 ? sandMap : rockMap;

  const { contract: game } = useLobbyContract();
  const { data, loading, invoke } = useStarknetInvoke({
    contract: game,
    method: "move",
  });

  console.log(event);
  const call_move = () => {
    invoke({
      args: [],
    });
  };

  return (
    <mesh
      scale={[1, 1, 0.1]}
      rotation={[Math.PI / -2, 0, 0]}
      position={[position.x, 0, position.y]}
      onPointerEnter={(e) => [dispatch(highlightCell(cell)),console.log(key)]}
      onClick={(e) => {
        if (cell === selectedCell && playerPosition !== cell) {
          dispatch(movePlayer(cell));
          dispatch(selectCell(null));
        } else if (cell !== selectedCell) {
          dispatch(selectCell(cell));
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
