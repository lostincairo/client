import React, { useEffect } from "react";
import Image from "next/image";
import JoinLobbyButton from "./Starknet/JoinLobbyButton";
import ConnectButton from './Starknet/Connect/ConnectButton';
import Lobby from "./Lobby";
import { useDispatch, useSelector } from "react-redux";
import { enterGame, enterLobby } from "/redux/gameSlice";
import {
  useContract,
  useStarknetInvoke,
  useStarknetTransactionManager,
} from "@starknet-react/core";
import { useLobbyContract } from "/hooks/LobbyContract";

import { useStarknet } from '@starknet-react/core';

export default function Landing({ }) {
  const { value } = useSelector((store) => store._connect);
  const { inLobby } = useSelector((store) => store._game);


  return (
    <div className="my-2 h-full">
      {inLobby || (
        <div className="flex flex-auto justify-center content-center mx-auto max-w-3xl p-5 flex-col lg:px-8">
            <Image
              src="/lost_in_cairo.svg"
              layout="responsive"
              height="98"
              width="183"
            />

          <SwitchButton />
        </div>
      )}
      {inLobby && value && <JoinLobbyButton />}
    </div>
  );
}


function SwitchButton() {
  const { account } = useStarknet();

  if(account) {
    return(
      <JoinLobbyButton />
    )} else {
      return(
        <ConnectButton />
        )
    }
  }
