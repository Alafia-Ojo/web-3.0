import { TransactionDescription } from "ethers/lib/utils";
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  return (
      <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-mdhover:shadow-2xl">
           <div className="flex flex-col items-center w-full mt-3">
               <div className="flex justify-start w-full mb-6 p-2">
                   <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                       
                   </a>
               </div>
           </div>
      </div>
  )
};

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-center my-2 text-3xl">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-center my-2 text-3xl">
            Connect your Account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {dummyData.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
