import React, { useRef } from "react";
import _scene from "../../redux/sceneSlice";
import { hovered, idle } from "../../redux/sceneSlice";
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
    <Canvas
      orthographic
      camera={{
        position: [-10, 6, -10],
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        zoom: 100,
      }}
    >
      <ambientLight intensity={0.6} />
      <group>
      <directionalLight color="#ffe6b3" position={[4, 10, 5]} />
        <Board />
        {/* <OrbitControls enablePan={false} minDistance={4} maxDistance={60} /> */}
        {/* <orthographicCamera position={[0, 0, 10]} /> */}
      </group>
    </Canvas>
  );
};
export default CombatScene;
