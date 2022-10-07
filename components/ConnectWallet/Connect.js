import { useStarknet, useConnectors } from '@starknet-react/core';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import _connect from '../../redux/connectSlice';
import { connected, connecting, disconnected } from '../../redux/connectSlice';
import _connectModal from '../../redux/modalSlice'
import { ShowModal, HideModal } from '../../redux/modalSlice';

import WalletModal from './WalletModal'


// TODO: refactor to implement Disconnect modal incl. transaction queue and link to explorer 

export default function ConnectWallet() {
  const { account } = useStarknet()
  const { available, connect, disconnect } = useConnectors()

  const dispatch = useDispatch()
  const { isOpen } = useSelector((store) => store._connectModal)

  
    if (account) {
      return (
        <div className="flex justify-center content-center mx-auto max-w-7xl w-full p-5 flex-col lg:px-8">
          <button
            className="mx-auto rounded-md bg-charcoal px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => [disconnect(), dispatch(disconnected())]}
          >
            {account.substring(0, 6)}...{account.substring(account.length - 4)}
          </button>
        </div>
      );
    }

    return (
      <div className="flex justify-center content-center max-w-7xl w-full p-5 flex-col lg:px-8">
        <button
          type="button"
          className="mx-auto w-40 h-20 bg-[url('../public/play_button.svg')] bg-contain bg-no-repeat bg-center px-4 py-4 "
          onClick={() => [dispatch(connecting()), dispatch(ShowModal())]}
        >
          
        </button>
        {isOpen && <WalletModal />}
      </div>
    );

}


