import { useContract } from "@starknet-react/core";
import LobbyABI from "/components/Starknet/ABI/lobby_abi.json";

export function useLobbyContract() {
  return useContract({
    abi: LobbyABI,
    address:
      "0x00b9212c1a4c2f5d5695511a72f718d62138d53809dc446ca3299718f96c3d7f",
  });
}