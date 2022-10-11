import { useContract } from "@starknet-react/core";
import GameABI from "/components/Starknet/ABI/game_abi.json";

export function useGameContract() {
  return useContract({
    abi: GameABI,
    address:
      "0x073006b1156b9fcdf8088a43281a6f87e772b0632702bf962a9d9d6d04ed3fef",
  });
}