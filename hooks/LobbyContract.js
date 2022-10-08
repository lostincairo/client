import { useContract } from "@starknet-react/core";
import LobbyABI from "/components/Starknet/ABI/lobby_abi.json";

export function useLobbyContract() {
  return useContract({
    abi: LobbyABI,
    address:
      "0x05963295b16d217829c722f7bf83b1f584fb65ed7136b7617a0286d40f8c30e1",
  });
}