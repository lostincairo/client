import { useContract } from "@starknet-react/core";
import LobbyABI from "/components/Starknet/ABI/lobby_abi.json";

export function useLobbyContract() {
  return useContract({
    abi: LobbyABI,
    address:
      "0x05aa5e2c9934999b90a34a7fcc774986415d384dc4fe6c6efae51e804c344cd1",
  });
}