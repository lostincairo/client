import Notification from './Notification';
import { useTransactionManager } from '@starknet-react/core'

export default function Panel({ toggle }) {
    const { transactions } = useTransactionManager()
    return (
        transactions.length === 0
            ? <div onClick={() => toggle(false)}>
                <div >You have no pending transactions</div>
            </div>
            : <div>
                {
                    transactions.map(transaction => {
                        return <Notif key={transaction.transactionHash} transaction={transaction} />;
                    })
                }
            </div>
    );
}