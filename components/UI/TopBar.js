import ExitButton from "./ExitButton";
import OpponentStats from "./OpponentStats";
import NetworkInfo from "/components/Starknet/Network/NetworkInfo";
import ConnectButton from "/components/Starknet/Connect/ConnectButton";

export default function TopBar() {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex-col">
      <NetworkInfo /> 
      <OpponentStats />
      </div>
           
     
      <div className="flex items-start">
        <ConnectButton />
        <ExitButton />
      </div>
    </div>
  );
}
