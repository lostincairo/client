import React from "react";
import { useStarknet, useStarknetInvoke } from "@starknet-react/core";
import { useLobbyContract } from "/hooks/LobbyContract";
import EventHistory from "./EventHistory";
import Vitals from "./Vitals";
import Actions from "./Actions";
import EndTurn from "./EndTurn";

export default function ControlBar() {

  return (
    <div className="flex flex-row bg-sand shadow sm:rounded-lg">
      <EventHistory />
      <Vitals />
      <Actions />
      <EndTurn />
    </div>
  );
}
