import { useState } from "react";
import Combat from "./Scene/Combat";
import ControlBar from "./UI/ControlBar";
import Notification from "./Starknet/Transaction/Notification";
import TopBar from "/components/UI/TopBar";
import InitialPosition from "/components/UI/InitialPosition"

export default function Game() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col relative flex-auto justify-center h-screen bg-sand">
      <TopBar />
      <div className=" grow">
        <Combat />
      </div>
      <InitialPosition />
      <ControlBar />
    </div>
  );
}
