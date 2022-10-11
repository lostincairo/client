import React, { useEffect, useMemo } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import {
  useTransactionManager,
  useTransaction,
  useAccount,
  useStarknetCall,
} from "@starknet-react/core";
import { useLobbyContract } from "/hooks/LobbyContract";
import { useGameContract } from "/hooks/GameContract";
import {
  Accepted,
  Rejected,
  Pending,
} from "/components/Starknet/Transaction/Status";
import Panel from "/components/Starknet/Transaction/Panel";
import { useDispatch, useSelector } from "react-redux";
import { enterGame, exitLobby, enterInit, exitInit } from "/redux/gameSlice";
import { setGameIdx, setPlayerAddress, setOpponentAddress } from "/redux/starknetSlice";


// TODO: Clean and searate those functions. This is gross.
// TODO: Only display the button when the game is active.


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CallReadQueueIndex() {



  const { address } = useAccount();
  const { contract: lobby } = useLobbyContract();
  const { data, loading, error, refresh } = useStarknetCall({
    contract: lobby,
    method: "address_to_queue_index_read",
    args: [address],
    options: {
      watch: true,
    },
  });

  return { data, loading, error, refresh };
}


////////////////////////////////////////////////////////////////

function CallPlayerAddressToGameIdx() {

  const { address } = useAccount();
  const { contract: game } = useGameContract();
  const { data, loading, error, refresh } = useStarknetCall({
    contract: game,
    method: "player_address_to_game_idx_read",
    args: [address],
    options: {
      watch: true,
    },
  });

  return { data, loading, error, refresh };
}

////////////////////////////////////////////////////////////////

function CallFirstPlayerAddress(GAME_IDX) {

  const { address } = useAccount();
  const { contract: game } = useGameContract();
  const { data, loading, error, refresh } = useStarknetCall({
    contract: game,
    method: "game_idx_to_first_player_read",
    args: [GAME_IDX],
    options: {
      watch: true,
    },
  });

  return { data, loading, error, refresh };
}

////////////////////////////////////////////////////////////////

function CallSecondPlayerAddress(GAME_IDX) {

  const { address } = useAccount();
  const { contract: game } = useGameContract();
  const { data, loading, error, refresh } = useStarknetCall({
    contract: game,
    method: "game_idx_to_second_player_read",
    args: [GAME_IDX],
    options: {
      watch: true,
    },
  });

  return { data, loading, error, refresh };
}



////////////////////////////////////////////////////////////////


export default function Lobby() {

  const { inInit } = useSelector((store) => store._game);
  const dispatch = useDispatch();


  const { transactions } = useTransactionManager();
  const { address } = useAccount();

  const {
    data: queue_index,
    loading: call_loading,
    error: call_error,
    refresh: call_refresh,
  } = CallReadQueueIndex();

  const QUEUE_INDEX = queue_index ? queue_index[0] : [];
  console.log(QUEUE_INDEX);


  const {
    data: game_idx,
    loading: game_idx_loading,
    error: game_idx_error,
    refresh: game_idx_refresh,
  } = CallPlayerAddressToGameIdx();

const GAME_IDX = game_idx ? game_idx[0] : [];
console.log(GAME_IDX);

////////////////////////////////////////////////////////////////

const {
  data: first_player,
  loading: first_player_loading,
  error: first_player_error,
  refresh: first_player_refresh,
} = CallFirstPlayerAddress();

const FIRST_PLAYER = first_player ? first_player[0] : [];
console.log(FIRST_PLAYER);


const {
  data: second_player,
  loading: second_player_loading,
  error: second_player_error,
  refresh: second_player_refresh,
} = CallSecondPlayerAddress();

const SECOND_PLAYER = second_player ? second_player[0] : [];
console.log(SECOND_PLAYER);

let PLAYER;
let OPPONENT;
if (!FIRST_PLAYER && !SECOND_PLAYER) {
  const OPPONENT = "...";
} else if (address === FIRST_PLAYER) {
  const PLAYER = first_player ? first_player[0] : [];
  const OPPONENT = second_player ? second_player[0] : [];
} else {
  const PLAYER = second_player ? second_player[0] : [];
  const OPPONENT = first_player ? first_player[0] : [];
}

////////////////////////////////////////////////////////////////

  // TODO: Need to dynamically allocate the hash based on data from useStarknetCall
  // Little trick for now
  const txHash =
    "0x14ca13f3ef0847f8095aa1386318487edca659d3f6869c6a3da586e279f6879";
  const {
    data: tx_data,
    loading: tx_loading,
    error: tx_error,
  } = useTransaction({ hash: txHash });

  // Need to refresh the state
  const TX_DATA = tx_data ? tx_data.status : [];

  let TX_STATUS;
  if (TX_DATA === "TRANSACTION_RECEIVED" || TX_DATA === "RECEIVED" || TX_DATA === "PENDING" || TX_DATA === "REJECTED")
    TX_STATUS = "Entering the Queue, please stand by";
  // if (TX_DATA === "REJECTED")
  //   TX_STATUS = "Something went wrong. Please submit a bug report";
  if (TX_DATA === "ACCEPTED_ON_L2" || TX_DATA === "ACCEPTED_ON_L1")
    TX_STATUS = "Well done, you're in queue";


  // Listen for game activation and dispatch(ExitLobby) and EnterGame.

  const steps = [
    {
      name: `Access key identified for player ${address}`,
      description: "Vitae sed mi luctus laoreet.",
      href: "#",
      status: "complete",
    },
    {
      name: `${TX_STATUS}`,
      description: "Cursus semper viverra facilisis et et some more.",
      href: "#",
      status: "current",
    },
    {
      name: `Position in queue : ${QUEUE_INDEX} `,
      description: "You are the 3rd in queue",
      href: "#",
      status: "upcoming",
    },
    {
      name: `Opening the arena for game #${GAME_IDX}`,
      description: "Training will start soon",
      href: "#",
      status: "upcoming",
    },
    {
      name: `It's your turn, be brave. You're facing ${OPPONENT}`,
      description: "Iusto et officia maiores porro ad non quas.",
      href: "#",
      status: "upcoming",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center font-mario bg-[url('../public/scene.png')] bg-cover w-full h-screen py-12 sm:px-6 lg:px-8">
      <div className="bg-white p-10 rounded-2xl shadow-xl">
      <nav aria-label="Progress">
        <ol role="list" className="overflow-hidden">
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? "pb-10" : "",
                "relative"
              )}
            >
              {step.status === "complete" ? (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-charcoal"
                      aria-hidden="true"
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className="group relative flex items-center"
                  >
                    <span className="flex h-9 items-center">
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal group-hover:bg-charcoal">
                        <CheckIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                    <span className="ml-4 flex min-w-0 flex-col">
                      <span className="text-sm text-black font-medium">{step.name}</span>
                      {/* <span className="text-sm text-gray-500">{step.description}</span> */}
                    </span>
                  </a>
                </>
              ) : step.status === "current" ? (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                      aria-hidden="true"
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className="group relative flex items-center"
                    aria-current="step"
                  >
                    <span className="flex h-9 items-center" aria-hidden="true">
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-charcoal bg-white">
                        <span className="h-2.5 w-2.5 rounded-full bg-charcoal" />
                      </span>
                    </span>
                    <span className="ml-4 flex min-w-0 flex-col">
                      <span className="text-sm font-medium text-orange-700">
                        {step.name}
                      </span>
                      {/* <span className="text-sm text-gray-500">{step.description}</span> */}
                    </span>
                  </a>
                </>
              ) : (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                      aria-hidden="true"
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className="group relative flex items-center"
                  >
                    <span className="flex h-9 items-center" aria-hidden="true">
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                        <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                      </span>
                    </span>
                    <span className="ml-4 flex min-w-0 flex-col">
                      <span className="text-sm font-medium text-gray-500">
                        {step.name}
                      </span>
                      {/* <span className="text-sm text-gray-500">{step.description}</span> */}
                    </span>
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <button className="flex flew-row items-center pt-20 ml-50 w-40 h-20 hover:bg-[url('/play_button_hover.svg')] bg-[url('/play_button.svg')] bg-contain bg-no-repeat bg-center px-4 py-4" onClick={(e) => [dispatch(enterInit()),dispatch(enterGame()),dispatch(exitLobby()),,dispatch(setGameIdx(GAME_IDX)),,dispatch(setPlayerAddress(PLAYER)),,dispatch(setOpponentAddress(OPPONENT))]}></button>
      </div>
    </div>
  );
}
