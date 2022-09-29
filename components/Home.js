import LobbyModal from "./Lobby/LobbyModal";
import { useDispatch, useSelector } from "react-redux";
import { enterGame, enterLobby } from "../redux/gameSlice";
import { useContract, useStarknetInvoke } from '@starknet-react/core'
import LobbyABI from "../utils/ContractABIs/lobby.json"

export default function Home() {
    const dispatch = useDispatch();

    const {
      data: LobbyData,
      loading: LobbyLoading,
      invoke: LobbyInvoke,
    }
      = useStarknetInvoke({
        contract: useContract({
          abi: LobbyABI,
          address: "0x07961d9acae000306cc5100d10e2c9851d9f05c6f03a91c3daea1886590674fc"
        }),
        method: "anyone_ask_to_queue",
      });

      const JoinLobby = () => {
        LobbyInvoke()
      };

    return (
      <div className="flex justify-center content-center mx-auto max-w-7xl h-screen w-full p-5 flex-col lg:px-8">
          <h1 className="py-12 h-72 text-center align-top text-black text-6xl font-extrabold">
            Lost in Cairo
          </h1>

          <button
            className="p-10 mx-auto rounded-md bg-charcoal px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            // onClick={() => setShowModal(true)}
            onClick={() => [ JoinLobby(), dispatch(enterLobby())]}
          >
            Join Lobby
          </button>
          <LobbyModal />
        </div>
    );
}