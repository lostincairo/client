import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { position } from '/redux/starknetSlice'; 
import {
  useStarknetInvoke, 
  useAccount,
} from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";




export default function InitialPosition() {

    const dispatch = useDispatch();
    const { address } = useAccount();
    const { contract: game } = useGameContract();
    const { data, loading, invoke } = useStarknetInvoke({
      contract: game,
      method: "set_initial_player_position"
  });
  
  const { selectedCell } = useSelector((store) => store._scene)
  
  const call_set_initial_position = () => {
    invoke({
      args:[1, 3, 4],
    });
  };
    
  return (
    <div className="flex flex-col bg-sand shadow sm:rounded-lg">
        <h1>Select your starting position</h1>
        <p>Click on any cell on the grid to set your starting position</p>
        <p>You will be starting from {selectedCell}</p>
        <button className="bg-blue-400" onClick={() => [call_set_initial_position, dispatch(position(selectedCell))]}>I'm ready!</button>

    </div>
  );
}
