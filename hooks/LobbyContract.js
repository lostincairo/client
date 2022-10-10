import { useContract } from "@starknet-react/core";
import LobbyABI from "/components/Starknet/ABI/lobby_abi.json";

export function useLobbyContract() {
  return useContract({
    abi: LobbyABI,
    address:
      "0x04d56159b3e0268f837e25b72d1f70fd8ed7a90b22bcabef72a20a81691b7437",
  });
}