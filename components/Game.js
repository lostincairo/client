import { useState } from "react";
import CombatScene from "../game/scenes/CombatScene";
import MoveDisplay from "./UI/MoveDisplay";
import HighlightDisplay from "./UI/HighlightDisplay";
import DialogBox from "./UI/DialogBox";
import TxNotification from "./TransactionStatus/Notification";

export default function Navigation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center content-center mx-auto max-w-7xl h-screen w-full p-5 flex-col lg:px-8">
       {/* <Home /> */}
       <TxNotification />
       <DialogBox />
       <MoveDisplay />
       <HighlightDisplay />
      <div className="h-screen bg-sand w-95">
      <CombatScene  className="h- w-full p-5 flex-col lg:px-8"/>

      </div>
    </div>
  );
}
