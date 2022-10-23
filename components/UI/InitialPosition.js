import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { positionRow, positionCol } from '/redux/starknetSlice'; 
import { useStarknetExecute } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";
import { exitInit } from "/redux/gameSlice";

export default function InitialPosition() {

    const { selectedRow, selectedCol } = useSelector((store) => store._scene);
    const { playerRow, playerCol, gameIdx } = useSelector((store) => store._starknet);
    const dispatch = useDispatch();
  
    const { contract: game } = useGameContract();
    const { execute } = useStarknetExecute({ contract: game, method: "set_initial_player_position" });
  
  return (
    <div className="flex flex-col items-center max-w-7xl bg-white text-charcoal font-mario p-10 rounded-2xl shadow-xl">
        <p>Click on any cell on the grid to set your starting position</p>
        <p className="pt-3 pb-6">You will be starting from Position ({selectedRow}, {selectedCol})</p>
        <button 
        className="pt-2 max-w-7xl w-36 h-20 hover:bg-[url('/ready_button_hover.svg')] bg-[url('/ready_button.svg')] bg-contain bg-no-repeat bg-center px-4"
        onClick={() => [
          execute({args:[gameIdx, selectedRow, selectedCol]}),
        ]}
        >
        </button>
    </div>
  );
}
