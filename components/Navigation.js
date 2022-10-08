import React from "react";
import Landing from "./Landing";
import Game from "./Game";
import Navbar from "./Navbar";
import Lobby from "./Lobby";

import { useStarknet, useConnectors } from "@starknet-react/core";
import { useDispatch, useSelector } from "react-redux";
import { connected } from "/redux/connectSlice";

export default function Navigation() {
  const { account } = useStarknet();
  const dispatch = useDispatch();
  const { inGame, inLobby } = useSelector((store) => store._game);

  if (account) {
    dispatch(connected());
  }

  return (
    <div className="flex content-center h-screen w-full flex-col bg-[url('../public/background.png')] bg-cover bg-right">
      { inGame || <Navbar /> } 
      { inLobby && <Lobby />}
      { inGame || <Landing /> }
      {/* { inGame && <Game /> } */}

      {/* <Game /> */}
    </div>
  );
}
