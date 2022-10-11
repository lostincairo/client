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
  const palmitoMap =  useLoader(TextureLoader, "palmito.svg");
    palmitoMap.repeat.set(1, 1);
    palmitoMap.magFilter = THREE.NearestFilter;
    palmitoMap.wrapS = palmitoMap.wrapT = THREE.RepeatWrapping;


  // Display the player on the grid cell.
  // WIP
  return (
    <sprite scale={[2, 2.6, 2]} position={[0, 1.4, 15]} rotation={[0, 0, 0]}>
      <spriteMaterial transparent map={palmitoMap} />
    </sprite>
  );

};

export default Palmito;
