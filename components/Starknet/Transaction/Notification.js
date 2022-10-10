import { Accepted, Rejected, Pending } from "./Status";
import { useStarknetTransactionManager } from "@starknet-react/core";

export default function Notif({ transaction }) {
  const { removeTransaction } = useStarknetTransactionManager();

  let status;
  if (
    transaction.status === "TRANSACTION_RECEIVED" ||
    transaction.status === "RECEIVED" ||
    transaction.status === "PENDING"
  )
    status = <Pending />;
  else if (transaction.status === "REJECTED") status = <Rejected />;
  else if (
    transaction.status === "ACCEPTED_ON_L1" ||
    transaction.status === "ACCEPTED_ON_L2"
  )
    status = <Accepted />;

  return (
    <div className="">
      <div>
        <div className="">
          {status}
          <h1 className="">Transaction</h1>
        </div>
        <p className="">Transaction Description</p>
      </div>
      <div>
        <button
          type="button"
          onClick={() => removeTransaction(transaction.transactionHash)}
          className="inline-flex items-center rounded-full border border-transparent bg-red-600 p-1 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          <PlusIconMini className="h-5 w-5" aria-hidden="true" />
        </button>
        <a
          className=""
          href={
            "https://testnet.starkscan.co/tx/" + transaction.transactionHash
          }
          target="_blank"
          rel="noreferrer"
        >
          See transaction on explorer
        </a>
      </div>
    </div>
  );
}
