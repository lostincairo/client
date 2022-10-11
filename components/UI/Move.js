import { useDispatch, useSelector } from "react-redux";
import { useStarknetInvoke, useAccount } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";

export default function Move() {
  const { selectedRow } = useSelector((store) => store._scene);
  const { selectedCol } = useSelector((store) => store._scene);
  const { playerRow, gameIdx, opponent_address } = useSelector((store) => store._starknet);
  const { playerCol } = useSelector((store) => store._starknet);

  const dispatch = useDispatch();

  function call_move() {
    const { address } = useAccount();
    const { contract: game } = useGameContract();
    const { data, loading, invoke } = useStarknetInvoke({
      contract: game,
      method: "move",
    });

    const call_end_turn = () => {
      invoke({
        args: [gameIdx, opponent_address, selectedRow, selectedCol],
      });
    };
  }

  const rowMove = (selectedRow - playerRow)
  const colMove = (selectedCol - playerCol)

  const rowMoveAbs = Math.abs(selectedRow - playerRow)
  const colMoveAbs = Math.abs(selectedCol - playerCol)
  
  if (rowMoveAbs > colMoveAbs) {
    if(rowMove >= 0) {
        dispatch(direction('UR'));
    } else if (rowMove < 0) {
        dispatch(direction('DL'));
    }} else if (rowMoveAbs <= colMoveAbs) {
      if (colMove >= 0){
        dispatch(direction('UL'));
      } else if (colMove < 0) {
        dispatch(direction('DR'));
      }
    }

  return (
    <div className="flex justify-center content-center max-w-7xl w-full p-5 flex-col lg:px-8">
      <button
        type="button"
        className="mx-auto w-40 h-20 hover:bg-[url('/play_button_hover.svg')] bg-[url('/play_button.svg')] bg-contain bg-no-repeat bg-center px-4 py-4"
        onClick={call_end_turn}
      ></button>
    </div>
  );
}
