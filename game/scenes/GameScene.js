import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import _scene from "./sceneSlice";
import { hovered, idle } from "./sceneSlice";
import { useDispatch, useSelector } from "react-redux";


const BoxComponent = ({ route }) => {
  const dispatch = useDispatch();
//   const { isHovered } = useSelector((store) => store._scene);

  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null);
  // Set up state for the hovered and active state

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.1)
      : null
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
        <mesh
          ref={mesh}
          onClick={() => dispatch(hovered())}
          onPointerover={() => dispatch(hovered())}
          onPointerOut={() => dispatch(idle())}
          scale={hovered ? 1 : 2}
        >
          <planeBufferGeometry args={[ 1, 1 ]} />
          <meshPhysicalMaterial color={route === "/" ? "orange" : "red"} />
        </mesh>
        <directionalLight position={[8, 2, 1]} />
        <ambientLight />
    </>
  );
};
export default BoxComponent;
