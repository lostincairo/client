import React, { useRef } from "react";
import _scene from "./sceneSlice";
import { hovered, idle } from "./sceneSlice";
import { useDispatch, useSelector } from "react-redux";
import { Canvas, extend } from "@react-three/fiber";
import Board from "../../components/SceneComponents/Board";
import CellPlayer from "./Player";
import { Environment, OrbitControls, Lightformer } from "@react-three/drei";


const CombatScene2 = () => {
  // State management
  const dispatch = useDispatch();
  //   const { isHovered } = useSelector((store) => store._scene);
  const mesh = useRef();

  return (
    <Canvas>
      {/* <ambientLight intensity={0.6} /> */}
      <directionalLight color="#ffe6b3" position={[1, 0, 1]} />
      <CellPlayer />

    </Canvas>
  );
};
export default CombatScene2;
