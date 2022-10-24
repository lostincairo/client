import { useDispatch, useSelector } from "react-redux";
import { useStarknetExecute } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";

export default function Move() {
  const { selectedRow, selectedCol } = useSelector((store) => store._scene);
  const { gameIdx, opponent_address } = useSelector((store) => store._starknet);
  const dispatch = useDispatch();


  const { contract: game } = useGameContract();
  const { execute } = useStarknetExecute({
    contractAddress: game.address,
    entrypoint: "move",
    calldata: [gameIdx, opponent_address, selectedRow, selectedCol]
  });

    
  return (
    <div className="flex justify-center content-center max-w-7xl w-full p-5 flex-col lg:px-8">
      <button
        type="button"
        className="mx-auto w-40 h-20 hover:bg-[url('/play_button_hover.svg')] bg-[url('/play_button.svg')] bg-contain bg-no-repeat bg-center px-4 py-4"
        onClick={execute}
      ></button>
    </div>
  );
}
