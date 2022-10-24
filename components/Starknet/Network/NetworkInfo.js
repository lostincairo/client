import React from "react";
import BlockNumber from "./BlockNumber";
import NetworkStatus from "./NetworkStatus";

export default function NetworkInfo({props}) {

    return (
        <div className="pt-2 flex flex-row content-center">
            <NetworkStatus />
            <BlockNumber  props={props}/>
        </div>
    )
}