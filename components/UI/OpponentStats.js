import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import {
    useTransactionManager,
    useTransaction,
    useAccount,
    useStarknetCall,
  } from "@starknet-react/core";
  import { useGameContract } from "/hooks/GameContract";
  import { setOpponentRow, setOpponentCol } from "/redux/starknetSlice";

function CallHealthOpponent(opponent_address) {

    const { address } = useAccount();
    const { contract: game } = useGameContract();
    const { data, loading, error, refresh } = useStarknetCall({
      contract: game,
      method: "health_per_player_read",
      args: [opponent_address],
      options: {
        watch: true,
      },
    });
  
    const HEALTH_POINTS = data ? data[0].toString() : [];
    return <div className="">Health: {HEALTH_POINTS}</div>;
  }


function CallActionOpponent(opponent_address) {

    const { address } = useAccount();
    const { contract: game } = useGameContract();
    const { data, loading, error, refresh } = useStarknetCall({
      contract: game,
      method: "action_per_player_read",
      args: [opponent_address],
      options: {
        watch: true,
      },
    });
  
    const ACTION_POINTS = data ? data[0].toString() : [];
    return <div className="">Action: {ACTION_POINTS}</div>;
  }


function CallMovementOpponent(opponent_address) {

    const { address } = useAccount();
    const { contract: game } = useGameContract();
    const { data, loading, error, refresh } = useStarknetCall({
      contract: game,
      method: "movement_per_player_read",
      args: [opponent_address],
      options: {
        watch: true,
      },
    });
  
    const MOVEMENT_POINTS = data ? data[0].toString() : [];
    return <div className="">Movement: {MOVEMENT_POINTS}</div>;
  }



function CallRowOpponent(game_idx, opponent_address) {

    const { address } = useAccount();
    const { contract: game } = useGameContract();
    const { data, loading, error, refresh } = useStarknetCall({
      contract: game,
      method: "x_position_per_player_read",
      args: [game_idx, opponent_address],
      options: {
        watch: true,
      },
    });
  
    const OPPONENT_ROW = data ? data[0].toString() : "";
    return(OPPONENT_ROW);
  }

function CallColOpponent(game_idx, opponent_address) {

    const { address } = useAccount();
    const { contract: game } = useGameContract();
    const { data, loading, error, refresh } = useStarknetCall({
      contract: game,
      method: "y_position_per_player_read",
      args: [game_idx, opponent_address],
      options: {
        watch: true,
      },
    });
  
    const OPPONENT_COL = data ? data[0].toString() : "";
    return(OPPONENT_COL);
  }




export default function OpponentStats() {
    const { opponent_address } = useSelector((store) => store._starknet);
    const { gameIdx } = useSelector((store) => store._starknet);

    const dispatch = useDispatch();

    const opponent_row = CallRowOpponent(gameIdx, opponent_address)
    const opponent_col = CallColOpponent(gameIdx, opponent_address)

    dispatch(setOpponentRow(opponent_row))
    dispatch(setOpponentCol(opponent_col))

    return(
        <div className="p-2 bg-white font-mario text-black rounded-lg">
        {/* <div>Game {gameIdx}</div> */}
        <div>Facing {opponent_address}</div>
        <CallHealthOpponent opponent_address={opponent_address}/>
        <CallActionOpponent opponent_address={opponent_address}/>
        <CallMovementOpponent opponent_address={opponent_address}/>
        </div>
        )
}