import { Dialog, Transition } from "@headlessui/react";
import { useConnectors } from "@starknet-react/core";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { connected, connecting, disconnected } from "/redux/connectSlice";
import { ShowModal, HideModal } from "/redux/modalSlice";


export default function WalletModal() {
  const { isOpen } = useSelector((store) => store._connectModal);
  const dispatch = useDispatch();

  return (
    <Dialog
      as="div"
      className="relative z-10"
      open={isOpen}
      onClose={() => {
        dispatch(disconnected()), dispatch(HideModal());
      }}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed text-white inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#2E1C00] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div>
              <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button
                  type="button"
                  className="rounded-md focus:outline-none"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(disconnected()), dispatch(HideModal());
                    }}
                  />
                </button>
              </div>
              <div className="mt-3 text-center sm:mt-2">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                  Connect your Wallet
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm pb-6">
                    Choose your preferred wallet provider
                  </p>
                </div>
              </div>
            </div>
            <Providers />
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

// TODO: Add formatting to the paragraph
const Providers = () => {
  const { available, connect } = useConnectors();


  return available.map((connector) => (
    <div
      key={connector.id()}
      onClick={() => connect(connector)}
      className="flex flex-row mt-3 sm:mt-2 p-4 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3 rounded-md border border-transparent border-sand hover:bg-sand hover:border-black shadow-sm"
    >
      <p
        className="inline-flex items-center rounded-md text-base font-medium text-white "
        key={connector.id()}
      >
        {`${connector.name()}`}
      </p>
      <img
        src={`/${connector.name()}.svg`}
        className="w-12 h-auto ml-auto"
      />
    </div>
  ));
};
