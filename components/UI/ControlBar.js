import React from "react";
import { useStarknet, useStarknetInvoke } from "@starknet-react/core";
import { useLobbyContract } from "/hooks/LobbyContract";
import EventHistory from "./EventHistory";
import Vitals from "./Vitals";
import Actions from "./Actions";
import EndTurn from "./EndTurn";

export default function ControlBar({properties}) {

  return (
    <div className="flex flex-row content-center bg-contain mx-auto max-w-5xl w-full bg-no-repeat bg-center bg-[url('../public/bar.svg')] shadow sm:rounded-lg">
      {/* <EventHistory properties={properties}/> */}
      <Vitals />
      <Actions />
      <EndTurn />
    </div>
  );
}
