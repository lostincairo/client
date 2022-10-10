import Image from 'next/image';
import { useSelector } from "react-redux";
import {
  useStarknetInvoke, 
  useAccount,
} from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";

const actions = [
  { name: "Bow", description: "Launches an arrow towards the opponent", href:"/logo_Main.png" },
  { name: "Punch", description: "Trows a powerful punch towards the opponent", href:"/brick.png" },
];

//TODO: Add game_idx, opponent address to state
//TODO: Find a way to split the cell reference into (row-col)
//TODO: Map the methods to the action.name property
export default function Actions() {
  const { address } = useAccount();
  const { contract: game } = useGameContract();
  const { selectedCell } = useSelector((store) => store._scene)
  const { data, loading, invoke } = useStarknetInvoke({
    contract: game,
    method: "bow"
});


const call_action = () => {
  invoke({
    args:[1, 0x1, 1, 2],
  });
};


  return actions.map((action) => (
    <div>
    <div>{action.name}</div>
    <button onClick={call_action}>Button</button>
    <Image key={action.name} src={action.href} width="36" height="36"/>
    </div>
  ))
}

