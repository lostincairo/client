import { useState } from "react";
import Combat from "./Scene/Combat";
import MoveDisplay from "./UI/MoveDisplay";
import HighlightDisplay from "./UI/HighlightDisplay";
import ControlBar from "./UI/ControlBar";
import Notification from "./Starknet/Transaction/Notification";
import ExitButton from "/components/UI/ExitButton";

export default function Game() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col relative flex-auto justify-center bg-sand">
      <ExitButton className="" />
      <Notification />
      <div className=" grow">
        <Combat />
      </div>
      <ControlBar />
      <MoveDisplay />
      <HighlightDisplay />
    </div>
  );
}
