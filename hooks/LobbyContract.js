import { useContract } from "@starknet-react/core";
import LobbyABI from "/components/Starknet/ABI/lobby.json";

export function useLobbyContract() {
  return useContract({
    abi: LobbyABI,
    address:
      "0x058bc407db41c7503a15aa72d461741166c6cfa2a6d8c345a210e2dc6246f9a4",
  });
}