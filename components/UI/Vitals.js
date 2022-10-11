import {
  useAccount,
  useStarknetCall,
} from "@starknet-react/core";
import { useLobbyContract } from "/hooks/LobbyContract";
import { useGameContract } from "/hooks/GameContract";

export default function Vitals() {
  return (
    <div className="flex flex-row items-center font-mario text-2xl lg:px-8">
        <Health />
        <Action />
       <Movement />
    </div>
  );
}

function Health() {

  const { address } = useAccount();
  const { contract: game } = useGameContract();
  const { data, loading, error, refresh } = useStarknetCall({
    contract: game,
    method: "health_per_player_read",
    args: [address],
    options: {
      watch: true,
    },
  });

  const HEALTH_POINTS = data ? data[0].toString() : [];

  return <div className="text-white bg-cover bg-no-repeat bg-center bg-[url('../public/life_nav_bar.svg')]">{HEALTH_POINTS}</div>;
}

function Action() {

  const { address } = useAccount();
  const { contract: game } = useGameContract();
  const { data, loading, error, refresh } = useStarknetCall({
    contract: game,
    method: "action_per_player_read",
    args: [address],
    options: {
      watch: true,
    },
  });

  const ACTION_POINTS = data ? data[0].toString() : [];

  return <div className="bg-cover bg-no-repeat bg-center bg-[url('../public/AP.svg')]">{ACTION_POINTS}</div>;
}

function Movement() {

  const { address } = useAccount();
  const { contract: game } = useGameContract();
  const { data, loading, error, refresh } = useStarknetCall({
    contract: game,
    method: "movement_per_player_read",
    args: [address],
    options: {
      watch: true,
    },
  });

  const MOVEMENT_POINTS = data ? data[0].toString() : [];

  return <div className="bg-contain bg-no-repeat bg-center bg-[url('../public/MP.svg')]">{MOVEMENT_POINTS}</div>;
}
