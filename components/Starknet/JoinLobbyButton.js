import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "/redux/gameSlice";
import {
  useAccount,
  useStarknetExecute,
  useTransactionManager,
} from "@starknet-react/core";
import { useLobbyContract } from "/hooks/LobbyContract";
import { GetStaticProps } from "next";

export default function JoinLobbyButton() {
  const dispatch = useDispatch();
  const { account } = useAccount();
  const { contract: lobby } = useLobbyContract();

  const calls = useMemo(() => {
    const asktoqueue = {
      contractAddress: lobby.address,
      entrypoint: "anyone_ask_to_queue",
      calldata: [],
    };
    return [asktoqueue];
  }, [account])

  const { execute } = useStarknetExecute({ calls });

  // TODO: Find a way to implement the addTransaction function based on the called Ask_anyone_to_queue function
  const { hashes, addTransaction } = useTransactionManager();


  return (
    <div className="flex justify-center content-center mx-auto max-w-7xl w-full p-5 flex-col lg:px-8">
      <button
        className="mx-auto w-40 h-20 hover:bg-[url('/join_game_button_hover.svg')] bg-[url('/join_game_button.svg')] bg-contain bg-no-repeat bg-center px-4 py-4"
        onClick={() => {execute(); dispatch(setStep("LOBBY"))}}
      ></button>
    </div>
  );
}
