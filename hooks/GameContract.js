import { useContract } from "@starknet-react/core";
import GameABI from "/components/Starknet/ABI/game_abi.json";

export function useGameContract() {
  return useContract({
    abi: GameABI,
    address:
      "0x05b0009fdc8f69f9ff02202803a011cc2aade025dbc673403cd6246c17917702",
  });
}