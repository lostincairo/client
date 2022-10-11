import {
  useAccount,
  useStarknetCall,
} from "@starknet-react/core";
import { useLobbyContract } from "/hooks/LobbyContract";
import { useGameContract } from "/hooks/GameContract";

export default function Vitals() {
  return (
    <div className="font-mario text-2xl flex flex-row justify-start mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <Health />
      </div>
      <div>
        <Action />
      </div>
      <div>
        <Movement />
      </div>
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

  return <div className="pt-8	pl-9 w-20 h-20 bg-no-repeat bg-center bg-[url('../public/life_nav_bar.svg')]">{HEALTH_POINTS}</div>;
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

  return <div className="font-superMario pt-8 pl-9 w-20 h-20 bg-contain bg-no-repeat bg-center bg-[url('../public/AP.svg')]">{ACTION_POINTS}</div>;
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

  return <div className="pt-8 pl-9 w-20 h-20 bg-contain bg-no-repeat bg-center bg-[url('../public/MP.svg')]">{MOVEMENT_POINTS}</div>;
}
