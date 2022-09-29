import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { exitGame } from "../../redux/gameSlice";

export default function Exit() {

    const dispatch = useDispatch();

    return (
        <button
          type="button"
          className="p-10 ml-auto rounded-md bg-olive px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-charcoal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-charcoal-500"
          onClick={() => dispatch(exitGame())}
        >
          Exit Game
        </button>
    );
}