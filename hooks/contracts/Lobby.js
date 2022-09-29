import { useContract } from "@starknet-react/core";
import LobbyABI from "../../utils/ContractABIs/lobby.json";

export function useLobbyContract() {
  return useContract({
    abi: LobbyABI,
    address:
      "0x07961d9acae000306cc5100d10e2c9851d9f05c6f03a91c3daea1886590674fc",
  });
}