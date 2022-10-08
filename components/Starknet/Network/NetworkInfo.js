import React from "react";
import BlockNumber from "./BlockNumber";
import NetworkStatus from "./NetworkStatus";

export default function NetworkInfo() {

    return (
        <div className="flex flex-row align-middle">
            <BlockNumber 
            className="flex-auto align-middle"
            />
            <NetworkStatus
            className="flex-auto align-middle"
            />
        </div>
    )
}