import { useContract } from "@starknet-react/core";
import LobbyABI from "/components/Starknet/ABI/lobby_abi.json";

export function useLobbyContract() {
  return useContract({
    abi: LobbyABI,
    address:
      "0x076a32b7d2cea54d80a98b3d0c09addfa8ea16d07d7cc9a1f8e10e68c00b8849",
  });
}