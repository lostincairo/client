import ExitButton from "./ExitButton";
import OpponentStats from "./OpponentStats";
import NetworkInfo from "/components/Starknet/Network/NetworkInfo";
import ConnectButton from "/components/Starknet/Connect/ConnectButton";

export default function TopBar() {
  return (
    <div className="flex flex-row justify-around">
      <div>
      <NetworkInfo /> 
      <OpponentStats />
      </div>
           
      <ConnectButton />
      <div className="">
        <ExitButton />
      </div>
    </div>
  );
}
