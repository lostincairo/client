import { useContract } from "@starknet-react/core";
import LobbyABI from "/components/Starknet/ABI/lobby_abi.json";

export function useLobbyContract() {
  return useContract({
    abi: LobbyABI,
    address:
      "0x000b20162640f6607b6582c6de4d41966cdc4741c4e3b9740d9add7cfb1f10ef",
  });
}