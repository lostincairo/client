import Link from "next/link";
import { useState } from "react";
import Home from "./Home";
import Box from "../game/scenes/GameScene";
import { Canvas } from "@react-three/fiber";

export default function Navigation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center content-center mx-auto max-w-7xl h-screen w-full p-5 flex-col lg:px-8">
      <Home />
      <Canvas
        mode="concurrent"
        style={{
          position: "absolute",
          top: 0,
        }}

      >
        <Box />
      </Canvas>
    </div>
  );
}
