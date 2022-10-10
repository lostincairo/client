import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { positionRow, positionCol } from '/redux/starknetSlice'; 
import {
  useStarknetInvoke, 
  useAccount,
} from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";




export default function InitialPosition() {

    const { selectedRow } = useSelector((store) => store._scene);
    const { selectedCol } = useSelector((store) => store._scene);
    const { playerRow } = useSelector((store) => store._starknet);
    const { playerCol } = useSelector((store) => store._starknet);
    const dispatch = useDispatch();
    const { address } = useAccount();
    const { contract: game } = useGameContract();
    const { data, loading, invoke } = useStarknetInvoke({
      contract: game,
      method: "set_initial_player_position"
  });

  
  const call_set_initial_position = () => {
    invoke({
      args:[1, selectedRow, selectedCol],
    });
  };
    
  return (
    <div className="flex flex-col bg-sand shadow sm:rounded-lg">
        <h1>Select your starting position</h1>
        <p>Click on any cell on the grid to set your starting position</p>
        <p>You will be starting from Row: {selectedRow}, Column: {selectedCol}</p>
        <button className="bg-blue-400" onClick={() => [call_set_initial_position(), dispatch(positionRow(selectedRow)), dispatch(positionCol(selectedCol))]}>I'm ready!</button>

    </div>
  );
}
