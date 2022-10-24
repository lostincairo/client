import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStarknetCall } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";


export default function OpponentStats() {
  const { opponentRow, opponentCol, direction, opponent_address, gameIdx } =
    useSelector((store) => store._starknet);
  const dispatch = useDispatch();

  const { contract: game } = useGameContract();

  const { data: x } = useStarknetCall({
    contract: game,
    method: "x_position_per_player_read",
    args: [gameIdx, opponent_address],
  });
  const X = x ? x.x.words[0] : [];
  dispatch(setOp)

  const { data: y } = useStarknetCall({
    contract: game,
    method: "y_position_per_player_read",
    args: [gameIdx, opponent_address],
  });
  const Y = y ? y.y.words[0] : [];


  const { data: health } = useStarknetCall({
    contract: game,
    method: "health_per_player_read",
    args: [opponent_address],
  });
  const HEALTH = health ? health.health_value.words[0] : [];

  const { data: action } = useStarknetCall({
    contract: game,
    method: "action_per_player_read",
    args: [opponent_address],
  });
  const ACTION = action ? action.action_value.words[0] : [];

  const { data: movement } = useStarknetCall({
    contract: game,
    method: "movement_per_player_read",
    args: [opponent_address],
  });
  const MOVEMENT = movement ? movement.movement_value.words[0] : [];

  //////////////////////////////////////////////////////////////


  return (
    <div className="p-2 mt-4 bg-white font-mario text-black rounded-lg">
      <div>Game {gameIdx}</div>
      <div>
        Facing {opponent_address.substring(0, 6)}...
        {opponent_address.substring(opponent_address.length - 4)}
      </div>
      <div>Health: {HEALTH}</div>
      <div>ACTION: {ACTION}</div>
      <div>MOVEMENT: {MOVEMENT}</div>
      <div>
        POSITION: ({X}, {Y})
      </div>
    </div>
  );
}
