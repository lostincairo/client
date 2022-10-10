import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import {
  useStarknetInvoke, 
  useAccount,
} from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";
import { action, positionCol, positionRow, direction, SNhighlightRow, SNhighlightCol } from "../../redux/starknetSlice";


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
  const dispatch = useDispatch();
  const { data, loading, invoke } = useStarknetInvoke({
    contract: game,
    method: "bow"
});


const call_action = (x,y) => {
  invoke({
    args:[1, 0x1, x, y],
  });
};


  return actions.map((_action) => (
    <div>
    <div>{_action.name}</div>
    <button onClick={(e) => dispatch(action("bow"))}>Button</button>
    <Image key={_action.name} src={_action.href} width="36" height="36"/>
    </div>
  ))
}

