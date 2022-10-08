import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCell, highlightCell, movePlayer } from "/redux/sceneSlice";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three"

const Palmito = () => {
  // Store initialisation
  const dispatch = useDispatch();
  const { highlightedCell } = useSelector((store) => store._scene);
  const { selectedCell } = useSelector((store) => store._scene);
  const { movePlayer } = useSelector((store) => store._scene);

  // Texture setup
  const palmitoMap =  useLoader(TextureLoader, "palmito.png");
    palmitoMap.repeat.set(1, 1);
    palmitoMap.magFilter = THREE.NearestFilter;
    palmitoMap.wrapS = palmitoMap.wrapT = THREE.RepeatWrapping;


  // Display the player on the grid cell.
  // WIP
  return (
    <sprite scale={[1, 1, 1]} position={[-1, 1, -1]} rotation={[0, 0, 0]}>
      <spriteMaterial transparent map={palmitoMap} />
    </sprite>
  );

};

export default Palmito;
