import ExitButton from "./ExitButton";
import NetworkInfo from "/components/Starknet/Network/NetworkInfo";
import ConnectButton from "/components/Starknet/Connect/ConnectButton";

export default function TopBar() {
  return (
    <div className="flex flex-row flex-auto">
      <NetworkInfo />
      <div className="mx-auto align-right">
        <ConnectButton />
        <ExitButton />
      </div>
    </div>
  );
}
