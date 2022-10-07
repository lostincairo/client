import { useEffect } from "react";
import JoinLobby from "./Lobby/JoinLobby";
import React from "react";
import Image from "next/image";
import CairoLogo from "./UI/Logo";
import ConnectWallet from './ConnectWallet/Connect';
import { useDispatch, useSelector } from "react-redux";
import { enterGame, enterLobby } from "../redux/gameSlice";
import {
  useContract,
  useStarknetInvoke,
  useStarknetTransactionManager,
} from "@starknet-react/core";
import { useLobbyContract } from "../hooks/contracts/Lobby";
import ConnectingtoLobby from "./Lobby/ConnectingtoLobby";
import { useStarknet } from '@starknet-react/core';

export default function Home({ events }) {
  const { value } = useSelector((store) => store._connect);
  const { inLobby } = useSelector((store) => store._game);


  return (
    <div className="my-2 h-full">
      {inLobby || (
        <div className="flex justify-center content-center mx-auto max-w-3xl	h-auto p-5 flex-col lg:px-8">
            <Image
              src="/lost_in_cairo.svg"
              layout="responsive"
              height="98"
              width="183"
            />

          {/* <CairoLogo /> */}
          <ChooseBtn />
        </div>
      )}
      {inLobby && value && <ConnectingtoLobby />}
    </div>
  );
}


function ChooseBtn() {
  const { account } = useStarknet();

  if(account) {
    return(
      <JoinLobby />
    )} else {
      return(
        <ConnectWallet />
        )
    }
  }
