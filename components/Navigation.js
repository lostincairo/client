import React from "react";
import Landing from "./Landing";
import Game from "./Game";
import Navbar from "./Navbar";
import Lobby from "./Lobby";

import EventHistory from "./UI/EventHistory";

import { useStarknet, useConnectors } from "@starknet-react/core";
import { useDispatch, useSelector } from "react-redux";
import { connected } from "/redux/connectSlice";

export default function Navigation({properties}) {
  const { account } = useStarknet();
  const dispatch = useDispatch();
  const { inGame, inLobby, inInit } = useSelector((store) => store._game);

  if (account) {
    dispatch(connected());
  }
  if (inLobby) {
    return( 
    <div className="flex h-screen w-full flex-col bg-[url('../public/background.png')] bg-cover bg-right">
      <Lobby />
    </div>
  )} else if (inGame) {
    return(
      <div className="flex h-screen w-full flex-col bg-[url('../public/background.png')] bg-cover bg-right">
      <Game />
    </div>
    )
  } else {
    return(
      <div className="flex h-screen w-full flex-col bg-[url('../public/background.png')] bg-cover bg-right">
      <Navbar />
      <Landing properties={properties}/>
    </div>
    )
  }
}

//   return (
//     <div className="flex h-screen w-full flex-col bg-[url('../public/background.png')] bg-cover bg-right">
//       { inLobby || <Navbar /> } 
//       { inGame || <Navbar /> } 
//       { inLobby || <Landing /> }
//       { inGame && <Game properties={properties}/> }
//       {/* { inInit && <Game properties={properties}/> } */}
//       {/* <Game properties={properties}/> */}


//       {/* <Game /> */}
//     </div>
//   );
// }
