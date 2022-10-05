import React from "react";
import { useStarknetTransactionManager } from '@starknet-react/core'

export default function ConnectingtoLobby() {

    const { transactions } = useStarknetTransactionManager()

    // When Status goes from Pending to Accepted on L2, show check mark and call function 
    

    return(
        <div className="flex flex-col align-middle justify-center p-2">
            {transactions.map( transaction => {
                return <div>Your Hash {transaction.transactionHash}<div>Status: {transaction.status}</div></div>
                })}

            <div>Ready to enter the Arena ?</div>
            <div>Checking for access Key ...</div>
            <div>Access key located</div>
            <div>Entering Arena ...</div>
            <div>You're in queue </div>
            <div>X Fighters are ahead of you</div>
            <div>Your opponent is ready !</div>
            <div>It's your turn, be brave </div>
            
        </div>
    )
}