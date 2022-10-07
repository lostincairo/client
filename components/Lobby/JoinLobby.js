import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enterGame, enterLobby } from "../../redux/gameSlice";
import { useAccount, useConnectors, useContract, useStarknetInvoke, useStarknetTransactionManager, useStarknet } from "@starknet-react/core";
import { useLobbyContract } from "../../hooks/contracts/Lobby";
import { GetStaticProps } from "next";

export default function JoinLobby({event}) {

  const dispatch = useDispatch();

  const { contract: lobby } = useLobbyContract(); 

  const { data, loading, invoke } = useStarknetInvoke({contract: lobby, method: 'anyone_ask_to_queue'})

  console.log(event)
  const join_queue = () => {
    invoke({
    args: [],
  });
}

  return (
    <div className="flex justify-center content-center mx-auto max-w-7xl w-full p-5 flex-col lg:px-8">
      <button
        className="mx-auto  bg-[url('../public/join_game_button.svg')] bg-contain bg-no-repeat bg-center px-4 py-4 "
        // onClick={() => setShowModal(true)}
        onClick={() => [join_queue(), dispatch(enterLobby()), dispatch(enterGame())]}
      >
      
      </button>
    </div>
  );
}

