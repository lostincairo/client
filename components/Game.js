import { useState } from "react";
import CombatScene from "../game/scenes/CombatScene";
import MoveDisplay from "./UI/MoveDisplay";
import HighlightDisplay from "./UI/HighlightDisplay";
import DialogBox from "./UI/DialogBox";
import TxNotification from "./TransactionStatus/Notification";

export default function Game() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col flex-auto justify-center bg-sand">
      {/* <Home /> */}
      <TxNotification />
      <DialogBox />
      <MoveDisplay />
      <HighlightDisplay />
      <div className=" grow">
        <CombatScene />
      </div>
    </div>
  );
}
