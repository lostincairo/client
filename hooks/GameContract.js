import { useContract } from "@starknet-react/core";
import GameABI from "/components/Starknet/ABI/game_abi.json";

export function useGameContract() {
  return useContract({
    abi: GameABI,
    address:
      "0x0693cb0403999d5cc7d094205bde496aad48c72adfb6e2bdd2c8fbbfd68cbc02",
  });
}