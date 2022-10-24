import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount, useStarknetExecute } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";
import { setStep } from "../../redux/gameSlice";

export default function InitialPosition() {

    const { selected_x, selected_y } = useSelector((store) => store._scene);
    const { gameIdx } = useSelector((store) => store._starknet);
    const dispatch = useDispatch();
  
    const { account } = useAccount(); 
    const { contract: game } = useGameContract();

    const calls = useMemo(() => {
      const initialposition = {
        contractAddress: game.address,
        entrypoint: "set_initial_player_position",
        calldata: [ gameIdx, selected_x, selected_x ]
      };
      return [initialposition];
    }, [account] )

    const { execute } = useStarknetExecute({ calls });
  
  return (
    <div className="flex flex-col items-center max-w-7xl bg-white text-charcoal font-mario p-10 rounded-2xl shadow-xl">
        <p>Click on any cell on the grid to set your starting position</p>
        <p className="pt-3 pb-6">You will be starting from Position ({selected_x}, {selected_y})</p>
        <button 
        className="pt-2 max-w-7xl w-36 h-20 hover:bg-[url('/ready_button_hover.svg')] bg-[url('/ready_button.svg')] bg-contain bg-no-repeat bg-center px-4"
        onClick={() => {execute(); dispatch(setStep("GAME"))}}
        >
        </button>
    </div>
  );
}
