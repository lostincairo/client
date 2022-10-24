import React, { useMemo } from "react";
import Landing from "./Landing";
import Game from "./Game";
import Navbar from "./Navbar";
import Lobby from "./Lobby";

import { useAccount } from "@starknet-react/core";
import { useDispatch, useSelector } from "react-redux";
import { connected } from "/redux/connectSlice";

export default function Navigation({properties}) {
  const { account } = useAccount();
  const dispatch = useDispatch();
  const { inGame, inLobby, inInit, step } = useSelector((store) => store._game);

  const background = "flex h-screen w-full flex-col bg-[url('../public/background.png')] bg-cover bg-right"

  useMemo(() => {
    if (account) {
      dispatch(connected());
    }
    return;
  }, [account]);


  if (step === "LOBBY") {
    return( 
    <div className={background}>
      <Lobby />
    </div>
  )} else if (step === "GAME" || step === "INIT") {
    return(
      <div className={background}>
      <Game />
    </div>
    )
  } else {
    return(
      <div className={background}>
      <Navbar />
      <Landing properties={properties}/>
    </div>
    )
  }
}

