import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enterGame, enterLobby } from "../../redux/gameSlice";
import { useAccount, useConnectors, useContract, useStarknetInvoke, useStarknetTransactionManager, useStarknet } from "@starknet-react/core";
import { useLobbyContract } from "../../hooks/contracts/Lobby";


export default function JoinLobby() {

  const dispatch = useDispatch();

  const { contract: lobby } = useLobbyContract(); 

  const { data, loading, invoke } = useStarknetInvoke({contract: lobby, method: 'anyone_ask_to_queue'})

  const join_queue = () => {
    invoke({
    args: [],
  });
}

  return (
    <div className="flex justify-center content-center mx-auto max-w-7xl h-screen w-full p-5 flex-col lg:px-8">
      <button
        className="p-10 mx-auto rounded-md bg-charcoal px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        // onClick={() => setShowModal(true)}
        onClick={() => [join_queue(), dispatch(enterLobby())]}
      >
        Join Lobby
      </button>
    </div>
  );
}

