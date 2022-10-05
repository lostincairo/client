import React from "react";
import Home from "./Home";
import Game from "./Game";
import Exit from "./UI/Exit";
import { useStarknet, useConnectors } from '@starknet-react/core';
import { useDispatch, useSelector } from "react-redux";
import { connected } from "../redux/connectSlice";

export default function Navigation() {
  const { account } = useStarknet()  
  

  const dispatch = useDispatch();

  const { inGame } = useSelector((store) => (store._game))

  if(account) {
    dispatch(connected())
  }

  return (
    <div className="flex justify-center content-center mx-auto max-w-7xl h-screen w-full p-5 flex-col lg:px-8">
      <Exit />
      { inGame || <Home /> }
      { inGame && <Game /> }
      {/* <Game /> */}
    </div>
  );
}
