import { useState } from "react";
import Combat from "./Scene/Combat";
import ControlBar from "./UI/ControlBar";
import Notification from "./Starknet/Transaction/Notification";
import TopBar from "/components/UI/TopBar";
import InitialPosition from "/components/UI/InitialPosition";
import { useDispatch, useSelector } from "react-redux";

export default function Game({ properties }) {
  const { inInit } = useSelector((store) => store._game);

  return (
    <div className="flex flex-col px-4 pt-2 relative h-screen w-full bg-[url('../public/scene.png')] bg-cover">
      <TopBar />

      <Combat />
      <div className="flex flex-col items-center justify-center">
      {inInit && <InitialPosition />}
      </div>
      <div className="flex flex-col items-center -mb-7">
      {inInit || <ControlBar properties={properties} />}
      </div>
    </div>
  );
}
