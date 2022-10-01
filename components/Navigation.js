import React from "react";
import Home from "./Home";
import Game from "./Game";
import Exit from "./UI/Exit";
import { useDispatch, useSelector } from "react-redux";

export default function Navigation() {

  const { inGame } = useSelector((store) => (store._game))

  return (
    <div className="flex justify-center content-center mx-auto max-w-7xl h-screen w-full p-5 flex-col lg:px-8">
      <Exit />
      { inGame || <Home /> } 
      {/* { inGame && <Game /> } */}
      <Game />
    </div>
  );
}
