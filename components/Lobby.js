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
import { exitLobby, enterInit, exitInit } from "/redux/gameSlice";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// TODO: redeploy contracts with address_to_queue_index_read exposed
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

  // TODO: Need to dynamically allocate the hash based on data from useStarknetCall
  const txHash =
    "0x1109bbe58a1eddb4b4950a07e5f33ee0401865204b7b03c53a54418ce83ee19";
  const {
    data: tx_data,
    loading: tx_loading,
    error: tx_error,
  } = useTransaction({ hash: txHash });

  // Need to refresh the state
  const TX_DATA = tx_data ? tx_data.status : [];

  let TX_STATUS;
  if (TX_DATA === "TRANSACTION_RECEIVED" || TX_DATA === "RECEIVED" || TX_DATA === "PENDING")
    TX_STATUS = "Entering the Queue, please stand by";
  if (TX_DATA === "REJECTED")
    TX_STATUS = "Something went wrong. Please submit a bug report";
  if (TX_DATA === "ACCEPTED_ON_L2" || TX_DATA === "ACCEPTED_ON_L1")
    TX_STATUS = "Well done, you're in queue";


  // Listen for game activation and dispatch(ExitLobby) and EnterGame.

  const steps = [
    {
      name: `Checking for access key for account ${address}`,
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
      name: "Opening the arena",
      description: "Training will start soon",
      href: "#",
      status: "upcoming",
    },
    {
      name: "It's your turn, be brave",
      description: "Iusto et officia maiores porro ad non quas.",
      href: "#",
      status: "upcoming",
    },
  ];

  return (
    <div className=" mx-auto bg-black w-full h-screen py-12 sm:px-6 lg:px-8">
      <Panel />
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
                      className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
                      aria-hidden="true"
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className="group relative flex items-center"
                  >
                    <span className="flex h-9 items-center">
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                        <CheckIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                    <span className="ml-4 flex min-w-0 flex-col">
                      <span className="text-sm font-medium">{step.name}</span>
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
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                        <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                      </span>
                    </span>
                    <span className="ml-4 flex min-w-0 flex-col">
                      <span className="text-sm font-medium text-sand">
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
      <button className="bg-blue-800" onClick={(e) => [dispatch(enterInit()),dispatch(exitLobby())]}>Enter the Game</button>
    </div>
  );
}
