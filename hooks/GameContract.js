import { useContract } from "@starknet-react/core";
import GameABI from "/components/Starknet/ABI/game_abi.json";

export function useGameContract() {
  return useContract({
    abi: GameABI,
    address:
      "0x07ab646063e190d88ab9058f529f347a7c6e66b2c5723f54a4e3cf89058d60c2",
  });
}