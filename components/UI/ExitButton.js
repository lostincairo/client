import React, { Fragment, useState } from "react";
import { Transition } from '@headlessui/react'
import { useDispatch, useSelector } from "react-redux";
import { exitGame } from "/redux/gameSlice";
import { exitLobby } from "/redux/gameSlice";

export default function ExitButton() {
  const dispatch = useDispatch();

  return (
        <button
          type="button"
          className="mx-auto w-40 h-20 hover:bg-[url('/exit_game_button_hover.svg')] bg-[url('/exit_game_button.svg')] bg-contain bg-no-repeat bg-center px-4 py-4"
          onClick={() => [dispatch(exitGame()), dispatch(exitLobby())]}
        ></button>
  );
}
