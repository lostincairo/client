import { useDispatch, useSelector } from "react-redux";
import {
    useTransactionManager,
    useTransaction,
    useAccount,
    useStarknetCall,
  } from "@starknet-react/core";
  import { useGameContract } from "/hooks/GameContract";


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




export default function OpponentStats() {
    const { opponent_address } = useSelector((store) => store._starknet);
    const { gameIdx } = useSelector((store) => store._starknet);

    return(
        <div className="p-2 bg-white font-mario text-black rounded-lg">
        {/* <div>Game {gameIdx}</div> */}
        <div>Facing {opponent_address}</div>
        <CallHealthOpponent />
        <CallActionOpponent />
        <CallMovementOpponent />
        </div>
        )
}