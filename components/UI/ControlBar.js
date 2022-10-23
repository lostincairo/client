import React from "react";
import Vitals from "./Vitals";
import Actions from "./Actions";
import EndTurn from "./EndTurn";

export default function ControlBar({properties}) {

  return (
    <div className="flex flex-row justify-between h-40 w-full max-w-4xl bg-no-repeat bg-center bg-contain bg-[url('../public/bar.svg')] shadow sm:rounded-lg">
      <Vitals />
      <Actions />
      <EndTurn />
    </div>
  );
}
