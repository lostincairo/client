import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { exitGame } from "/redux/gameSlice";
import { exitLobby } from "/redux/gameSlice";

// TODO: Call forfeit and add confirmation modal

export default function ExitButton() {
  const dispatch = useDispatch();

  return (
        <button
          type="button"
          className="w-40 h-20 hover:bg-[url('/exit_game_button_hover.svg')] bg-[url('/exit_game_button.svg')] bg-contain bg-no-repeat bg-center "
          onClick={() => [dispatch(exitGame()), dispatch(exitLobby())]}
        ></button>
  );
}
