import { useState } from "react";
import Combat from "./Scene/Combat";
import ControlBar from "./UI/ControlBar";
import Notification from "./Starknet/Transaction/Notification";
import TopBar from "/components/UI/TopBar";
import InitialPosition from "/components/UI/InitialPosition";
import { useDispatch, useSelector } from "react-redux";

export default function Game({ properties }) {
  const [showModal, setShowModal] = useState(false);
  const { inInit } = useSelector((store) => store._game);

  return (
    <div className="flex flex-col items-center relative h-screen w-full bg-[url('../public/scene.png')] bg-cover">
      <TopBar />

      <Combat />

      {inInit && <InitialPosition />}
      {inInit || <ControlBar properties={properties} />}
    </div>
  );
}
