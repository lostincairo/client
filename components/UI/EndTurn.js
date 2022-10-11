import { useSelector } from "react-redux";
import {
  useStarknetInvoke, 
  useAccount,
} from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";


export default function EndTurn() {
  const { playerRow, gameIdx, opponent_address } = useSelector((store) => store._starknet);
  const { address } = useAccount();
  const { contract: game } = useGameContract();
  
  const { data, loading, invoke } = useStarknetInvoke({
    contract: game,
    method: "end_turn"
});


const call_end_turn = () => {
  invoke({
    args:[gameIdx, opponent_address],
  });
};


    return (
        <div className="flex justify-center max-w-7xl p-5 flex-col lg:px-8">
          <button
            type="button"
            className="mx-auto w-40 h-20 hover:bg-[url('/button_next_round_hover.svg')] bg-[url('/button_next_round.svg')] bg-contain bg-no-repeat bg-center px-4 py-4" 
            onClick={call_end_turn}
          ></button>
        </div>
      );
}