import { useContract } from "@starknet-react/core";
import GameABI from "/components/Starknet/ABI/game_abi.json";

export function useGameContract() {
  return useContract({
    abi: GameABI,
    address:
      "0x01af1411feb9c73a781d105cdd17b77496d1d1e10203af7f7f7f02f4331accec",
  });
}