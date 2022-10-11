import { useState } from "react";
import Combat from "./Scene/Combat";
import ControlBar from "./UI/ControlBar";
import Notification from "./Starknet/Transaction/Notification";
import TopBar from "/components/UI/TopBar";
import InitialPosition from "/components/UI/InitialPosition"
import { useDispatch, useSelector } from "react-redux";

export default function Game({properties}) {
  const [showModal, setShowModal] = useState(false);
  const { inInit } = useSelector((store) => store._game);

  return (
    <div className="flex flex-col relative h-screen bg-[url('../public/scene.png')] bg-cover">
      <TopBar />
      <div className=" grow">
        <Combat />
      </div>
      { inInit && <InitialPosition />}
      <ControlBar properties={properties}/>
    </div>
  );
}
