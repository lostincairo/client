import React, { useRef } from "react";
import _scene from "./sceneSlice";
import { hovered, idle } from "./sceneSlice";
import { useDispatch, useSelector } from "react-redux";
import { Canvas, extend } from "@react-three/fiber";
import Board from "../../components/SceneComponents/Board";
import { Environment, OrbitControls, Lightformer } from "@react-three/drei";

const CombatScene = () => {
  // State management
  const dispatch = useDispatch();
  //   const { isHovered } = useSelector((store) => store._scene);
  const mesh = useRef();

  return (
    <Canvas camera={{ fov: 90, position: [-8, 10, 7] }}>
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[4, 10, 5]} />
      <group>
        <Board />
        {/* <OrbitControls enablePan={false} minDistance={4} maxDistance={60} /> */}
        {/* <orthographicCamera position={[0, 0, 10]} /> */}
      </group>
    </Canvas>
  );
};
export default CombatScene;
