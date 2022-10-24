import { useAccount, useStarknetCall } from "@starknet-react/core";
import { useGameContract } from "/hooks/GameContract";

export default function Vitals() {
  return (
    <div className="flex flex-row grow w-60 font-mario text-2xl lg:px-8">
        <Health />
        <Action />
       <Movement />
    </div>
  );
}

function Health() {

  const { address } = useAccount();
  const { contract: game } = useGameContract();
  const { data } = useStarknetCall({contract: game, method: "health_per_player_read", args: [address]});

  const HEALTH_POINTS = data ? data[0].toString() : [];

  return <div className="flex items-center mx-2 px-5 pl-6 text-white bg-contain bg-no-repeat bg-center bg-[url('../public/life_nav_bar.svg')]">{HEALTH_POINTS}</div>;
}

function Action() {

  const { address } = useAccount();
  const { contract: game } = useGameContract();
  const { data } = useStarknetCall({contract: game, method: "action_per_player_read", args: [address]});

  const ACTION_POINTS = data ? data[0].toString() : [];

  return <div className="flex items-center px-6 pl-7 mb-1 bg-contain bg-no-repeat bg-center bg-[url('../public/AP.svg')]">{ACTION_POINTS}</div>;
}

function Movement() {

  const { address } = useAccount();
  const { contract: game } = useGameContract();
  const { data } = useStarknetCall({contract: game, method: "movement_per_player_read", args: [address]});

  const MOVEMENT_POINTS = data ? data[0].toString() : [];

  return <div className="flex items-center px-6 pl-7 mb-1 bg-contain bg-no-repeat bg-center bg-[url('../public/MP.svg')]">{MOVEMENT_POINTS}</div>;
}
