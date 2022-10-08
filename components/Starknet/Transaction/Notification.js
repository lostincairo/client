import { Accepted, Rejected, Pending } from './Status';
import { useStarknetTransactionManager } from '@starknet-react/core'


export default function Notif({ transaction }) {

    const { removeTransaction } = useStarknetTransactionManager()
    
    let status;
    if (transaction.status === "TRANSACTION_RECEIVED"
        || transaction.status === "RECEIVED" || transaction.status === "PENDING")
        status = <Pending />;
    else if (transaction.status === "REJECTED")
        status = <Rejected />;
    else if (transaction.status === "ACCEPTED_ON_L1" || transaction.status === "ACCEPTED_ON_L2")
        status = <Accepted />;

    return (
        <div className="">
            <div >
                <div className="">
                    {status}
                    <h1 className="">Transaction</h1>
                </div>
                <p className="">Transaction Description</p>
            </div>
            <div className="">
                <svg onClick={() => removeTransaction(transaction.transactionHash)} className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <a className="" href={"https://testnet.starkscan.co/tx/" + transaction.transactionHash} target="_blank" rel="noreferrer">
                    <svg className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                </a>
            </div>
        </div>
    );

}