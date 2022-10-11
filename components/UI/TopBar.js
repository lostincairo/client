import ExitButton from "./ExitButton";
import NetworkInfo from "/components/Starknet/Network/NetworkInfo";
import ConnectButton from "/components/Starknet/Connect/ConnectButton";

export default function TopBar() {
  return (
    <div className="flex flex-row justify-around">
      <NetworkInfo />        
      <ConnectButton />
      <div className="">
        <ExitButton />
      </div>
    </div>
  );
}
