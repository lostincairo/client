import {
  useAccount,
  useStarknetCall,
} from "@starknet-react/core";
import { useLobbyContract } from "/hooks/LobbyContract";
import { useGameContract } from "/hooks/GameContract";

export default function Vitals() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>Vitals</div>
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

  return <div>100 {HEALTH_POINTS}</div>;
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

  return <div>2 {ACTION_POINTS}</div>;
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

  return <div>1 {MOVEMENT_POINTS}</div>;
}
