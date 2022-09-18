import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useStarknet, useConnectors } from '@starknet-react/core'
import { XMarkIcon } from '@heroicons/react/24/outline'


export default function WalletModal({showModal, setShowModal}) {
  const cancelButtonRef = useRef(null)

  const { account } = useStarknet()
  const { available, connect, disconnect } = useConnectors()

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setShowModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed text-black inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white focus:outline-none">
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" onClick={() => setShowModal(false)}/>
                  </button>
                </div>
                  <div className="mt-3 text-center sm:mt-2">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                      Connect your Wallet
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm">
                        Choose your preferred wallet provider
                      </p>
                    </div>
                  </div>
                </div>
                <Providers />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

const Providers = ({showModal, setShowModal}) => {
  const { available, connect } = useConnectors()

  return(
  available.map((connector) => (
    <div key={connector.id()} 
    onClick={() => connect(connector)}
    className="flex flex-row mt-3 sm:mt-2 p-4 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3 rounded-md border border-transparent border-sand hover:bg-sand hover:border-black shadow-sm">
    <p
    className="inline-flex items-center rounded-md text-base font-medium text-black "  
    key={connector.id()}>
      {`${connector.name()}`}
    </p>
    <img src={`/../${connector.name()}_logo.png`} 
    key={connector.name()}
    className="w-12 h-auto ml-auto"/>
    </div>
  )
)) 
}
