import React from "react";
import Image from "next/image";
import JoinLobbyButton from "./Starknet/JoinLobbyButton";
import ConnectButton from "./Starknet/Connect/ConnectButton";
import { useConnectors } from "@starknet-react/core";

export default function Landing() {

  return (
    <div className="my-2 h-full">
      <div className="flex flex-auto justify-center content-center mx-auto max-w-3xl p-5 flex-col lg:px-8">
        <Image
          src="/lost_in_cairo.svg"
          layout="responsive"
          height="98"
          width="183"
        />
        <SwitchButton />
      </div>
    </div>
  );
}

function SwitchButton() {
  const { status } = useConnectors();

  if (status === "disconnected") {
    return <ConnectButton />;
  } else {
    return <JoinLobbyButton />;
  }
}
