import React, { useMemo } from "react";
import { useBlock } from '@starknet-react/core'
import ExitButton from "./ExitButton";
import OpponentStats from "./OpponentStats";
import NetworkInfo from "/components/Starknet/Network/NetworkInfo";
import ConnectButton from "/components/Starknet/Connect/ConnectButton";

export default function TopBar() {

  const { data, isLoading, isError } = useBlock() 

  const indicatorText = useMemo(() => {
    if (data) {
      return data.block_number;
    }
    if (isLoading) {
      return "Loading";
    }
    if (isError) {
      return "Network Error";
    }
    return "";
  }, [data, isLoading, isError]);

  return (
    <div className="flex flex-row justify-between ">
      <div className="flex-col">
      <NetworkInfo props={indicatorText}/> 
      <OpponentStats />
      </div>
           
     
      <div className="flex items-start">
        <ConnectButton />
        <ExitButton />
      </div>
    </div>
  );
}
