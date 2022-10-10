import Notification from './Notification';
import { useTransactionManager, useTransactions } from '@starknet-react/core'

export default function Panel() {
    const { hashes, addTransaction } = useTransactionManager()
    const transactions = useTransactions({ hashes })
    return (
        transactions.length === 0
            ? <div >You have no pending transactions</div>
            : <div>
                {
                    transactions.map(transaction => {
                        return <Notif key={transaction.transactionHash} transaction={transaction} />;
                    })
                }
            </div>
    );
}