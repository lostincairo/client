import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import {
  useTransactionManager,
  useTransaction,
  useAccount,
  useStarknetCall,
} from "@starknet-react/core";
import { useLobbyContract } from "/hooks/LobbyContract";
import { useGameContract } from "/hooks/GameContract";

import Panel from "/components/Starknet/Transaction/Panel";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const call_read_queue_index = () => {
//   const { address } = useAccount();
//   const { contract: game } = useGameContract();
//   const { data, loading, error, refresh } = useStarknetCall({
//     contract: game,
//     method: "x_position_per_player_read",
//     args: [address],
//     options: {
//       watch: true,
//     },
//   });

//   if (data) {
//     return (<div>{data}</div>);
//   } else if (loading) {
//     return (<div>Accessing Queue ...</div>);
//   } else if (error) {
//     return (<div>Error: {error}</div>);
//   }
// }

export default function Lobby() {
  const transactions = useTransactionManager();
  const { address } = useAccount();

  const txHash = "0x06b26a4f819e0dcecc04914900caa75e335f05a2ed28d6ba28088d7db3380e03"
  const { data, loading , error } = useTransaction({ hash: txHash })
  console.log(data);
  // Replace by the right method for lobby
  const { contract: game } = useGameContract();
  // const { data_queue, loading_queue, error_queue, refresh_queue } = useStarknetCall({
  //   contract: game,
  //   method: "x_position_per_player_read",
  //   args: [address],
  //   options: {
  //     watch: true,
  //   },
  // });

  // When Status goes from Pending to Accepted on L2, show check mark and call function

  const steps = [
    {
      name: `Checking for access key for account ${address}`,
      description: "Vitae sed mi luctus laoreet.",
      href: "#",
      status: "complete",
    },
    {
      name: `g`,
      description: "Cursus semper viverra facilisis et et some more.",
      href: "#",
      status: "current",
    },
    {
      name: `sdv`,
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
    </div>
  );
}
