import { useContract } from "@starknet-react/core";
import GameABI from "/components/Starknet/ABI/game_abi.json";

export function useGameContract() {
  return useContract({
    abi: GameABI,
    address:
      "0x036196fb346506d2ef82a938fae4431e7ae7d39c3f870117339e19b7270443fe",
  });
}