import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import {
    useTransactionManager,
    useTransaction,
    useAccount,
    useStarknetCall,
  } from "@starknet-react/core";
  import { useGameContract } from "/hooks/GameContract";
  import { setOpponentRow, setOpponentCol } from "/redux/starknetSlice";



export default function OpponentStats() {

    const { opponentRow, opponentCol, direction, opponent_address, gameIdx } = useSelector((store) => store._starknet);
    const dispatch = useDispatch();

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
      return { data, loading, error, refresh };
      // const HEALTH_POINTS = data ? data[0].toString() : [];
      // return <div className="">Health: {HEALTH_POINTS}</div>;
    }


    const { data: health_opponent} = CallHealthOpponent(opponent_address);
    const HEALTH = health_opponent ? health_opponent.health_value.words[0] : [];

    
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
    
      return { data, loading, error, refresh };
    }
  
    const { data: action} = CallActionOpponent(opponent_address);
    const ACTION = action ? action.action_value.words[0] : [];


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
    
      return { data, loading, error, refresh };
    }

    const { data: movement} = CallMovementOpponent(opponent_address);
    const MOVEMENT = movement ? movement.movement_value.words[0] : [];



    //////////////////////////////////////////////////////////////
    

    //TODO: Fix because this call repeatedly the starknet RPC

  //   function CallOpponentY(GAME_IDX, OPPONENT) {
    
  //     const { address } = useAccount();
  //     const { contract: game } = useGameContract();
  //     const { data, loading, error, refresh } = useStarknetCall({
  //       contract: game,
  //       method: "y_position_per_player_read",
  //       args: [GAME_IDX, OPPONENT],
  //       options: {
  //         watch: true,
  //       },
  //     });
    
  //     return { data, loading, error, refresh };
  //   }
  
  //   const {
  //     data: opponent_x,
  //   } = CallOpponentX(gameIdx, opponent_address);
  
  // const OPPONENT_X = opponent_x ? opponent_x.x.words[0] : [];
  // // console.log(OPPONENT_X);
  // dispatch(setOpponentRow(OPPONENT_X));
  
  //   const {
  //     data: opponent_y,
  //   } = CallOpponentY(gameIdx, opponent_address);
  
  // const OPPONENT_Y = opponent_y ? opponent_y.y.words[0] : [];
  
  // dispatch(setOpponentCol(OPPONENT_Y));
  


  //   // const opponent_row = CallOpponentX(gameIdx, opponent_address)
  //   // const opponent_col = CallOpponentY(gameIdx, opponent_address)

  //   dispatch(setOpponentRow(OPPONENT_X))
  //   dispatch(setOpponentCol(OPPONENT_Y))

    return(
        <div className="p-2 mt-4 bg-white font-mario text-black rounded-lg">
        {/* <div>Game {gameIdx}</div> */}
        <div>Facing {opponent_address.substring(0, 6)}...{opponent_address.substring(opponent_address.length - 4)}</div>
        <div>Health: {HEALTH}</div>
        <div>ACTION: {ACTION}</div>
        <div>MOVEMENT: {MOVEMENT}</div>
        <div>POSITION: {opponentRow}, {opponentCol}</div>
        </div>
        )
}