import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCell, highlightCell } from "../../game/scenes/sceneSlice";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const CellPlayer = () => {
  const dispatch = useDispatch();

  const { highlightedCell } = useSelector((store) => store._scene);
  const { selectedCell } = useSelector((store) => store._scene);

  const playerMap = useLoader(TextureLoader, "spritesheet_caveman.png");

  playerMap.repeat.set(1/4, 1/4);

  playerMap.offset.x = 0;
  playerMap.offset.y = 0;

  const timeElapsed = 0;
  const counter = 0;

  useFrame(({ clock }, delta) => {
    timeElapsed += delta;
    counter += delta;
    console.log(timeElapsed);
    if (timeElapsed > 1) {
      playerMap.offset.x = 0;
      timeElapsed = 0;
    } else if (counter > 0.3) {
      playerMap.offset.x += 1 / 4;
      counter = 0;
    }
  });

  return (
    <mesh scale={[1, 1, 0.1]} position={[0, 0.6, 0]} rotation={[0,0.75,0]}>
      <boxGeometry args={[1, 1]} />
      <meshStandardMaterial map={playerMap} transparent={true} />
    </mesh>
  );
};

export default CellPlayer;
