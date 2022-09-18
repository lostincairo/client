import { useStarknet, useConnectors } from '@starknet-react/core'
import { useState } from 'react'
import WalletModal from './WalletModal'

// TODO: refactor to implement Disconnect modal incl. transaction queue and link to explorer 

export default function ConnectWallet() {
  const { account } = useStarknet()
  const { available, connect, disconnect } = useConnectors()

  const [showModal, setShowModal] = useState(false)

  if (account) {
    return (
      <div className="flex flex-row">
        <button
          className="p-10 ml-auto rounded-md bg-charcoal px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-charcoal-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => [disconnect(), setShowModal(false)]}
        >
          {account.substring(0, 6)}...{account.substring(account.length - 4)}
        </button>
      </div>
    );
  }

  return (
    <div
    className='flex flex-row'>
      <button
      type="button"
      className="p-10 ml-auto rounded-md bg-charcoal px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-charcoal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-charcoal-500"
      onClick={() => setShowModal(true)}
      >
      Connect Wallet
    </button>
    <WalletModal showModal={showModal} setShowModal={setShowModal}/> 
    </div>
  )
}


