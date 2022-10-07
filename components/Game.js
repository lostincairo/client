import { useState } from "react";
import CombatScene from "../game/scenes/CombatScene";
import MoveDisplay from "./UI/MoveDisplay";
import HighlightDisplay from "./UI/HighlightDisplay";
import DialogBox from "./UI/DialogBox";
import TxNotification from "./TransactionStatus/Notification";
import Exit from "./UI/Exit";

export default function Game() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center content-center h-max w-full flex-col">
       {/* <Home /> */}
       <Exit />
       <TxNotification />
       <DialogBox />
       <MoveDisplay />
       <HighlightDisplay />
      <div className="bg-sand">
      <CombatScene  className=" h-max w-full flex-col"/>

      </div>
    </div>
  );
}
