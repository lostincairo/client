import { useEffect } from "react";
import JoinLobby from "./Lobby/JoinLobby";
import { useDispatch, useSelector } from "react-redux";
import { enterGame, enterLobby } from "../redux/gameSlice";
import {
  useContract,
  useStarknetInvoke,
  useStarknetTransactionManager,
} from "@starknet-react/core";
import { useLobbyContract } from "../hooks/contracts/Lobby";
import ConnectingtoLobby from "./Lobby/ConnectingtoLobby";



export default function Home({events}) {
  const { value } = useSelector((store) => store._connect);
  const { inLobby } = useSelector((store) => store._game);

  return (
    <div className="flex justify-center content-center mx-auto max-w-7xl h-screen w-full p-5 flex-col lg:px-8">
      <h1 className="py-12 h-72 text-center align-top text-black text-6xl font-extrabold">
        Lost in Cairo
      </h1>
      { inLobby && value && <ConnectingtoLobby />}
      { inLobby || value && <JoinLobby />}
      <JoinLobby />
    </div>
  );
}


