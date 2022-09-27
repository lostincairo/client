import Link from "next/link";
import { useState } from "react";
import Home from "./Home";
import CombatScene from "../game/scenes/CombatScene";
import MoveDisplay from "./UI/MoveDisplay";
import HighlightDisplay from "./UI/HighlightDisplay";

export default function Navigation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center content-center mx-auto max-w-7xl h-screen w-full p-5 flex-col lg:px-8">
       {/* <Home /> */}
       <MoveDisplay />
       <HighlightDisplay />
      <div className="h-screen bg-sand w-95">
      <CombatScene  />
      </div>
    </div>
  );
}
