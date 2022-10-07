import React from "react";
import Home from "./Home";
import Game from "./Game";
import Navbar from "./Navbar";
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
    <div className="flex content-center h-screen w-full flex-col bg-[url('../public/background.png')] bg-cover bg-right">
      <Navbar />
      {/* { inGame || <Home /> } */}
      {/* { inGame && <Game /> } */}
      <Game />
    </div>
  );
}
