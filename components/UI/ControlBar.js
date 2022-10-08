import React from 'react';
import { useStarknet, useStarknetInvoke } from "@starknet-react/core";
import { useLobbyContract } from '/hooks/LobbyContract';

export default function ControlBar() {

  const { contract: lobby } = useLobbyContract(); 

  const { data, loading, invoke } = useStarknetInvoke({contract: lobby, method: 'anyone_ask_to_queue'})

  const join_queue = () => {
    invoke({
    args: [],
  });
}

    return (
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-black">Choose your starting position</h3>
          <div className="mt-2 sm:flex sm:items-start sm:justify-between">
            <div className="max-w-xl text-sm text-black">
              <p>
                Click any highlighted cell on the grid to select your starting position. Choose wisely.
              </p>
            </div>
            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-charcoal px-4 py-2 font-medium text-white shadow-sm hover:bg-charcoal focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                onClick={join_queue}
            
              >
                Let's go
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  